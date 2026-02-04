import type { Metadata } from "next";
// 1. Importamos la fuente (viene por defecto en Next 15)
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 2. Importamos nuestro componente
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn Next.js",
  description: "Mi primer proyecto profesional con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 3. Colocamos el Navbar AQUÍ, antes del children */}
        <Navbar />
        
        {/* El 'children' es el contenido de la page.tsx actual */}
        {children}
      </body>
    </html>
  );
}