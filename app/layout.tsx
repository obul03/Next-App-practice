import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter, IBM_Plex_Serif } from "next/font/google"
import { Variable } from "lucide-react";

const inter = Inter(
  {
  subsets: ["latin"],
  variable: '--font-inter'
  }
);
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Next App",
  description: "this is my first app related to banking plotform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable}  antialiased`}
      >
        {children}

      </body>
    </html>
  );
}
