import type { Metadata } from 'next';
import localFont from 'next/font/local';
import SmoothScroll from '../HOCs/smooth-scroll';
import '../assets/global.scss';
import Header from '@/components/_global/header';
import Footer from '@/components/_global/footer';
import Fathom from '../utils/fathom';

const satoshi = localFont({
  src: [
    {
      path: '../assets/fonts/Satoshi-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Satoshi-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--satoshi',
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  title: 'AlmaMed',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pl'>
      {/* <head>
      <SchemaOrganization />
      </head> */}
      <body className={`${satoshi.className} ${satoshi.variable}`}>
        <Header />
        <SmoothScroll>
          <main id='main'>{children}</main>
        </SmoothScroll>
        <Fathom />
        <Footer />
      </body>
    </html>
  );
}
