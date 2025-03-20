import Image from "next/image";
import Link from "next/link";
import Navigator from "./Navigator";
import HamburgerBtn from "./HamburgerBtn";
import SiteMap from "./SiteMap";
import { useState } from "react";

interface PageNameType {
    pageName: string;
  }

export default function Header({pageName}: PageNameType) {
    const [isMenu, setIsMenu] = useState(false);
    const SiteMapOpen = () =>   {
        console.log("^^^^^^^^^^^^^"+isMenu);
        setIsMenu((isMenu) => !isMenu);
    };

    const pathNameYn = pageName == "company" ? true : false;

    return (        
        <div className="max-w-screen-xl mx-auto justify-center w-full text-center">
            <div className="absolute w-full z-[2] right-0 left-0">
                <div id="header" className={`py-3 px-5 my-0 box-border ${pathNameYn ? "company" : ""}`}>
                    <div className="h_in max-w-screen-xl mx-auto">
                        <h1 className="flex logo max-w-[125px] sm:max-w-48 ">
                            <Link href={"/"} className="logo">
                                <Image src={"/img/logo2.png"} width={512} height={168} alt="" />
                            </Link>
                        </h1>
                        <nav>
                            <Navigator />
                        </nav>
                        <div className={`right_btn justify-end ${isMenu ? 'on': ''}`} onClick={SiteMapOpen}>
                            <HamburgerBtn />
                        </div>
                        <div className={`sitemap fixed xl:hidden z-[999] mt-12 sm:mt-16 left-0 top-0 w-full h-screen bg-[#2d3e4e] text-white transition-opacity duration-400 ${
                            isMenu ? "opacity-100 pointer-events-visible" : "opacity-0 pointer-events-none"
                            }`}>
                            <SiteMap />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}