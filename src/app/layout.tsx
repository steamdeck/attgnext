import { Public_Sans } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import ClientWrapper from './Components/Common/ClientWrapper';

const public_sans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});


export const metadata = {
  title: {
    absolute: '',
    default: 'AT Tech Global - Digital Agency',
    template: '%s | AT Tech Global - Digital Agency',
  },
  description: 'AT Tech Global - Digital Agency in Gurugram',
  openGraph: {
    title: 'AT Tech Global - Digital Agency',
    description: 'AT Tech Global - Digital Agency in Gurugram',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/assets/img/logo-3.png', sizes: 'any' },
      { url: '/icon.png', sizes: 'any' },
    ],
    shortcut: '/assets/img/logo-3.png',
    apple: '/assets/img/logo-3.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="icon" href="/assets/img/logo-3.png" sizes="any" />
        <link rel="preconnect" href="https://www.freeiconspng.com" />
        <link rel="preconnect" href="https://www.appsflyer.com" />
        <link rel="dns-prefetch" href="https://www.freeiconspng.com" />
        <link rel="dns-prefetch" href="https://www.appsflyer.com" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TNT3Y26E7Q"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-TNT3Y26E7Q');
            `,
          }}
        />
      </head>
      <body className={`${public_sans.variable}`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
