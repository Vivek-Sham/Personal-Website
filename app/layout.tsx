import type { Metadata } from "next";
import { Sora, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { UmamiAnalytics } from "@/components/UmamiAnalytics";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@/components/theme/ThemeProviders";
import { ModalProvider } from "@/components/ui/animated-modal";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";
import { BackgroundBeams } from "@/components/ui/background-beams";

const soraFont = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivek Sham",
  description: "Vivek's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${soraFont.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-mono)] relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            <Navbar />
            {children}
            <Footer />
          </ModalProvider>
        </ThemeProvider>
        <ScrollProgressBar type="bar" strokeSize={0.5} />
        <BackgroundBeams />
        <UmamiAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
