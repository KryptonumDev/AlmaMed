import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailData = {
  from: 'AlmaMed <kontakt@centrum-almamed.pl>',
  to: 'kontakt@centrum-almamed.pl',
};

const headers = {
  'Access-Control-Allow-Origin': 'https://centrum-almamed.pl',
  'Access-Control-Allow-Methods': 'POST',
};

export async function POST(request: Request) {
  const req = await request.json();

  const { name = '', email = '', phone = '', theme = '', message = '', office = '', legal = false } = req;

  const body = `<p>Imię i nazwisko: <b>${name}</b></p>
    <p>E-mail: <b>${email}</b></p>
    <p>Numer telefonu: <b>${phone || 'Nie podano'}</b></p>
    <p>Temat wiadomości: <b>${theme.value || 'Nie podano'}</b></p>
    <p>Placówka: <b>${office.value || 'Nie podano'}</b></p>
    <p>${message.trim() || ''}</p>
    <br />
    <br />
    <p><em>Wyrażono zgodnę na politykę prywatności</em></p>
    `;

  try {
    let answer = await resend.emails.send({
      from: emailData.from,
      reply_to: email,
      to: emailData.to,
      subject: `${name} wysłał wiadomość przez formularz kontaktowy`,
      html: body,
      text: body,
    });
    return NextResponse.json({ success: true }, { headers });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { headers });
  }
}
