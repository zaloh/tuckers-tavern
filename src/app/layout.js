import localFont from "next/font/local";
import { Playfair_Display } from 'next/font/google';
import Navigation from "@/components/Navigation";
import Image from 'next/image';
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tucker's Tavern | A Cozy Cat-Themed Inn",
  description: "Welcome to Tucker's Tavern - a whimsical cat-themed tavern offering delicious food, drinks, and comfortable lodging for weary travelers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased relative`}>
        {/* Background Image */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/tavern-bg.png"
            alt="Tavern Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        
        <Navigation />
        {children}
      </body>
    </html>
  );
}
