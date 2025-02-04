import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"

import "@/app/(home)/globals.css";
import { cn } from "@/lib/utils"
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "Suggest Feature - Share and Vote on Feature Requests",
  description: "Suggest Feature is a platform for sharing and voting on feature requests.",
  metadataBase: new URL('https://suggestfeature.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const CrispWithNoSSR = dynamic(
    () => import('@/components/crisp')
  )
  return (
    <html lang="en">
      <head>
        <script data-collect-dnt="true" async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* <Header /> */}
        {children}
        <Footer />
      </body>

    </html>
  );
}
