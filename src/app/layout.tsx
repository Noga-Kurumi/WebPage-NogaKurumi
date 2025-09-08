import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noga Kurumi | Portafolio",
  description: "Hola soy Noga Kurumi, Desarrolador de videojuegos y Editor de videos profesional",
  icons: {
    icon: "/NK-logo.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
