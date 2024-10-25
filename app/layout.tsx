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
        className={`${inter.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
