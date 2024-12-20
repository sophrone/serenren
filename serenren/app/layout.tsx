import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google"; 
import "./globals.css";
import Navbar from "./components/Navbar";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] }); 

export const metadata: Metadata = {
  title: "Serenren",
  description: "A fashion website for serenren showing products and services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/serenren-logo.png" type="image/x-icon" />
      </head>
      <body className={playfair.className}> 
        <Navbar />
        {children}
      </body>
    </html>
  );
}
