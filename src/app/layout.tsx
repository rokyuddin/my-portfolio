import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Arfan Roky Portfolio",
  description: "Learn To Develop Sites With Expertise Developer",
  metadataBase: new URL("https://arfanroky.cloud"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arfan Roky Portfolio",
    description: "Learn To Develop Sites With Expertise Developer",
    url: "https://arfanroky.cloud",
    siteName: "Arfan Roky Portfolio",
    images: [
      {
        url: "https://arfanroky.cloud/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arfan Roky Portfolio",
    description: "Learn To Develop Sites With Expertise Developer",
    images: ["https://arfanroky.cloud/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "PYDNjSl6nAl_MP72CypOuAJLPC9WMBgKSszQ_ioAd0o",
    yandex: "0b72eced716367f4",
    other: {
      "msvalidate.01": "1F6C889ADD216EE15CEFF0D849CD6D5C",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider attribute="class" enableSystem disableTransitionOnChange>
          {children}
        </Provider>
      </body>
    </html>
  );
}
