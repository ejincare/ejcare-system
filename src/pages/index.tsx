import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import KeyVisual from "@/components/KeyVisual";
import MainText from "@/components/MainText";
import PhotoCarousel from "@/components/PhotoCarousel";
import ContactUs from "@/components/ContactUs";
import Header from "@/components/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <Header />
      <main className="max-w-screen-xl mx-auto box-border">
        <KeyVisual />
        <MainText />
        <PhotoCarousel />
        <ContactUs />
        <div>
          email to
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
