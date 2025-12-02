import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LOWA Recordings - Phòng Thu Âm Chuyên Nghiệp Tại Hà Nội",
  description: "LOWA Recordings - Phòng thu âm chuyên nghiệp tại Hà Nội. Dịch vụ thu âm, mixing, mastering, hòa âm phối khí, sản xuất TVC. Liên hệ: 081 883 6868",
  keywords: "phòng thu âm, thu âm chuyên nghiệp, mixing mastering, hòa âm phối khí, LOWA Recordings, phòng thu Hà Nội, sản xuất nhạc, music production, recording studio",
  authors: [{ name: "LOWA Recordings" }],
  creator: "LOWA Recordings",
  publisher: "LOWA Recordings",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lowa-recordings.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "LOWA Recordings - Phòng Thu Âm Chuyên Nghiệp",
    description: "Phòng thu âm chuyên nghiệp tại Hà Nội. Dịch vụ thu âm, mixing, mastering, hòa âm phối khí, sản xuất TVC",
    url: 'https://lowa-recordings.vercel.app',
    siteName: 'LOWA Recordings',
    images: [
      {
        url: '/assets/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'LOWA Recordings Studio',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LOWA Recordings - Phòng Thu Âm Chuyên Nghiệp",
    description: "Phòng thu âm chuyên nghiệp tại Hà Nội",
    images: ['/assets/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Thêm Google Search Console verification code sau khi có
    // google: 'your-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
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