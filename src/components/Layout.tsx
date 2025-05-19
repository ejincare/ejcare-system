import { Geist, Geist_Mono } from "next/font/google";
import { ReactLenis } from 'lenis/react'
import { usePathname } from 'next/navigation'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";


interface LayoutProps {
  children: React.ReactNode; // 여기에 페이지 내용이 들어옵니다.
  // 레이아웃에 전달하고 싶은 추가 props가 있다면 여기에 정의합니다.
  // 예를 들어, pageTitle?: string;
}
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [pageName, setPageName] = useState('')
  const pathname = usePathname();
  useEffect(() => {
    if ( pathname === '/' ) {
      setPageName('main')
    } else {
      setPageName('subMenu')
    }
  }, [pathname])
  

  return (
    <ReactLenis root
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <Header pageName={pageName} />
      <div className="sm:min-h-screen pb-5">
        {children}
      </div>
      <Footer />

    </ReactLenis>
  );
}

export default Layout;