import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://energizetechsolutions.com"),
  title: {
    default: "Energize Tech Solutions - Leading Software Development & AI Solutions",
    template: "%s | Energize Tech Solutions",
  },
  description: "Energize Tech Solutions is a premier software development company with 24+ years of experience. We provide cutting-edge software solutions, AI services, web development, mobile applications, e-commerce platforms, and digital transformation services across Saudi Arabia, Egypt, Dubai, and Oman.",
  keywords: [
    "software development",
    "AI solutions",
    "web development",
    "mobile apps",
    "e-commerce",
    "digital transformation",
    "Saudi Arabia",
    "Egypt",
    "Dubai",
    "Oman",
    "programming company",
    "tech solutions",
    "custom software",
    "enterprise solutions",
    "cloud services",
    "cybersecurity",
    "SaaS development",
    "React development",
    "Next.js development",
    "full-stack development",
  ],
  authors: [{ name: "Energize Tech Solutions" }],
  creator: "Energize Tech Solutions",
  publisher: "Energize Tech Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA", "ar_EG"],
    url: "https://energizetechsolutions.com",
    siteName: "Energize Tech Solutions",
    title: "Energize Tech Solutions - Leading Software Development & AI Solutions",
    description: "Premier software development company with 24+ years of experience providing cutting-edge solutions across the Middle East",
    images: [
      {
        url: "/images/white-logo.png",
        width: 1200,
        height: 630,
        alt: "Energize Tech Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Energize Tech Solutions - Leading Software Development & AI Solutions",
    description: "Premier software development company with 24+ years of experience",
    images: ["/images/white-logo.png"],
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
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://energizetechsolutions.com",
    languages: {
      "en-US": "https://energizetechsolutions.com",
      "ar-SA": "https://energizetechsolutions.com/ar",
      "ar-EG": "https://energizetechsolutions.com/ar",
    },
  },
  category: "Technology",
  classification: "Software Development Company",
  icons: {
    icon: [
      { url: "/images/white-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/white-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/white-logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/white-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
