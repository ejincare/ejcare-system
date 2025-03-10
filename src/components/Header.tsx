import Image from "next/image";
import Link from "next/link";
import Navigator from "./Navigator";
import HamburgerBtn from "./HamburgerBtn";
import SiteMap from "./SiteMap";
import { useState } from "react";


export default function Header() {
    const [isMenu, setIsMenu] = useState(false);
    const SiteMapOpen = () =>   {
        console.log("^^^^^^^^^^^^^"+isMenu);
        setIsMenu((isMenu) => !isMenu);
    };

    return (
        <div id="header" className="py-3 px-3 sm:px-0 my-0 box-border">
            <div className="h_in max-w-screen-xl mx-auto">
                <h1 className="flex logo max-w-[125] sm:max-w-48 ">
                    <Link href={"/"} className="logo">
                        <Image src={"/img/logo6.jpg"} width={512} height={168} alt="" className="max-w-[125] sm:max-w-48 h-auto aspect-auto" />
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
    )
}