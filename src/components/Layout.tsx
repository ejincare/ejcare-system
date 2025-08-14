import { NextSeo } from 'next-seo';
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
  pageTitle?: string;
  pageDescription?: string;
}
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Layout: React.FC<LayoutProps> = ({ children, pageTitle, pageDescription }) => {
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
      <NextSeo
        title = {pageTitle ?? "이진케어시스템 홈페이지 - 한국을 주도하는 아파트 관리 ㈜이진케어시스템이 함께합니다"}
        description = {pageDescription ?? "이진케어시스템은 최첨단 미래형 관리 기술을 도입, 변화하는 생활환경에 빠르게 대응하고 고객의 기대에 앞서가는 새로운 환경을 조성함으로써 고객만족은 물론, 사람과 환경, 기술의 이상적인 조화를 추구, 쾌적하고 안전하며 효율적인 공간 관리를 실현하고 있습니다."}
        canonical="https://ejincare.com/"
        openGraph={{
          url: 'https://ejincare.com/',
          title: '이진케어시스템 홈페이지',
          description: '한국을 주도하는 아파트 관리 ㈜이진케어시스템이 함께합니다',
          images: [
            {
              url: 'https://ejincare.com/img/ejincare-logo-1200.jpg',
              width: 1200,
              height: 630,
              alt: '이진케어시스템 - 한국을 주도하는 아파트 관리 ㈜이진케어시스템이 함께합니다',
              type: 'image/jpg',
            },
          ],
          site_name: '이진케어시스템',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Header pageName={pageName} />
      <div className="sm:min-h-screen pb-5">
        {children}
      </div>
      <Footer />
    </ReactLenis>
  );
}

export default Layout;