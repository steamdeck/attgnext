import { Public_Sans } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const public_sans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});


export const metadata = {
  title: {
    absolute: '',
    default: 'AT Tech Global - Digital Agency React NextJS Template',
    template: '%s | AT Tech Global - Digital Agency React NextJS Template',
  },
  description: 'AT Tech Global - Digital Agency React NextJS Template',
  openGraph: {
    title: 'AT Tech Global - Digital Agency React NextJS Template',
    description: 'AT Tech Global - Digital Agency React NextJS Template',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://www.freeiconspng.com" />
        <link rel="preconnect" href="https://www.appsflyer.com" />
        <link rel="dns-prefetch" href="https://www.freeiconspng.com" />
        <link rel="dns-prefetch" href="https://www.appsflyer.com" />
      </head>
      <body className={`${public_sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
