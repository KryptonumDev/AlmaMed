import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedOrigins = ['https://centrum-almamed.pl', 'http://localhost:3000'];

const headers = {
  'Access-Control-Allow-Origin': 'https://centrum-almamed.pl',
  'Access-Control-Allow-Methods': 'POST',
};

const regex = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  phone: /^(?:\+(?:\d{1,3}))?(?:[ -]?\(?\d{1,4}\)?[ -]?\d{1,5}[ -]?\d{1,5}[ -]?\d{1,6})$/,
};

const getOrigin = (request: Request) => request.headers.get('origin') || '';

const createHeaders = (request: Request) => {
  const origin = getOrigin(request);
  const allowed = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

  return {
    ...headers,
    'Access-Control-Allow-Origin': allowed,
  };
};

export async function POST(request: Request) {
  const req = await request.json();

  const {
    name = '',
    email = '',
    phone = '',
    theme = '',
    message = '',
    targetEmail = '',
    legal = false,
    agreement = false,
  } = req;

  const selectedTheme = typeof theme === 'string' ? theme : theme?.value || '';
  const acceptedLegal = Boolean(legal || agreement);

  if (!name.trim() || !regex.email.test(email) || !selectedTheme.trim() || !message.trim() || !targetEmail.trim()) {
    return NextResponse.json({ success: false }, { headers: createHeaders(request), status: 400 });
  }

  if (phone && !regex.phone.test(phone)) {
    return NextResponse.json({ success: false }, { headers: createHeaders(request), status: 400 });
  }

  if (!acceptedLegal) {
    return NextResponse.json({ success: false }, { headers: createHeaders(request), status: 400 });
  }

  const body = `<p>Imię i nazwisko: <b>${name}</b></p>
    <p>E-mail: <b>${email}</b></p>
    <p>Numer telefonu: <b>${phone || 'Nie podano'}</b></p>
    <p>Temat wiadomości: <b>${selectedTheme || 'Nie podano'}</b></p>
    <p>Docelowy email: <b>${targetEmail}</b></p>
    <p>${message.trim() || ''}</p>
    <br />
    <br />
    <p><em>Wyrażono zgodę na politykę prywatności</em></p>
    `;

  try {
    await resend.emails.send({
      from: 'AlmaMed Współpraca <kontakt@centrum-almamed.pl>',
      reply_to: email,
      to: targetEmail,
      subject: `Formularz współpracy - ${name} przesyła wiadomość`,
      html: body,
      text: body,
    });

    return NextResponse.json({ success: true }, { headers: createHeaders(request) });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { headers: createHeaders(request), status: 500 });
  }
}
