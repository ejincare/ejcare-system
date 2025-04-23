import { Geist, Geist_Mono } from "next/font/google";
//import KeyVisual from "@/components/KeyVisual";
import MainText from "@/components/MainText";
import PhotoCarousel from "@/components/PhotoCarousel";
import ContactUs from "@/components/ContactUs";
import Header from "@/components/Header";
import Email from "@/components/Email";
import { ReactLenis } from 'lenis/react'
import IconBoxWrap from "@/components/IconBoxWrap";
import Hline from "@/components/Hline";
import ConPartner from "@/components/ConPartner";
import MainVisualWrap from "@/components/MainVisualWrap";
import Footer from "@/components/Footer";
import SearchSystem from "@/components/SearchSystem";

 
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
    <ReactLenis root
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <Header pageName={"main"}/>
      <MainVisualWrap />    
       
      <main className="box-border px-5 xl:px-0 relative">
        <SearchSystem url={""} title={""} description={""} />
        <MainText />
        <PhotoCarousel />
        <Hline />
        <IconBoxWrap />
        <Hline />
        <ConPartner/>
      </main>
      
      <Footer />
    </ReactLenis>
  );
}
