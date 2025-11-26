import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LOWA Recordings",
  description: "Phòng thu âm chuyên nghiệp tại Việt Nam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/assets/logo.jpg" />
      </head>
      <body className={inter.className}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        {children}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}