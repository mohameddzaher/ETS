import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Energize Tech Solutions - Leading Software Development & AI Solutions",
  description: "Energize Tech Solutions is a premier software development company with 24 years of experience. We provide cutting-edge software solutions, AI services, web development, mobile applications, e-commerce platforms, and digital transformation services across Saudi Arabia, Egypt, Dubai, and Oman.",
  keywords: "software development, AI solutions, web development, mobile apps, e-commerce, digital transformation, Saudi Arabia, programming company, tech solutions",
  authors: [{ name: "Energize Tech Solutions" }],
  openGraph: {
    title: "Energize Tech Solutions - Leading Software Development & AI Solutions",
    description: "Premier software development company with 24 years of experience providing cutting-edge solutions",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${cairo.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
