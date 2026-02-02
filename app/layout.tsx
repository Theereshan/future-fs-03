import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "AI Reimagined Brand Experience",
  description: "A modern AI-powered redesign project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
