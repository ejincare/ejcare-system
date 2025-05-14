import Image from "next/image";
import Link from "next/link";
import Navigator from "./Navigator";
import HamburgerBtn from "./HamburgerBtn";
import SiteMap from "./SiteMap";
import clsx from 'clsx';
import { useEffect, useState } from "react";
import useWindowSize from "@/utils/useWindowSize";

interface PageNameType {
    pageName: string;
}
 
export default function Header({pageName}: PageNameType) {
    // const [isMenu400, setIsMenu400] = useState(false);
    const windowSize = useWindowSize();

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOverSM, setIsOverSM] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const SiteMapOpen = () =>   {
        setIsMenu((isMenu) => !isMenu);
    };
    const ToggleOpenMenu = (isEnter: boolean | ((prevState: boolean) => boolean)) => {
        // console.log("set isEnter: " + isEnter);
        setIsOpenMenu(isEnter);
    }

    useEffect(() => {
      setIsOverSM(windowSize.width >= 1242);      
    }, [windowSize])
    

    const pathNameYn = pageName == "subMenu" ? true : false;

    return (        
        <div className="max-w-screen-xl mx-auto justify-center items-start w-full text-center">
            <div id="headerWrap" className={clsx(
                "absolute w-full z-[2] right-0 left-0 transition-all",
                isOverSM ? "sm:hover:bg-[#fff] sm:hover:h-[180px]" : "",
            )}
                onMouseEnter={() => ToggleOpenMenu(isOverSM)}
                onMouseLeave={() => ToggleOpenMenu(false)}
            >
                <div id="header" className={`py-3 px-5 my-0 box-border ${pathNameYn ? "subMenu" : ""}`}>
                    <div className="h_in max-w-screen-xl mx-auto">
                        <h1 className="flex logo max-w-[125px] sm:max-w-48 ">
                            <Link href={"/"} className="logo">
                                <Image src={"/img/logo2.png"} width={512} height={168} alt="" />
                            </Link>
                        </h1>
                        <nav className="my-0 mx-auto flex items-start justify-center gap-5 mt-3">
                            <Navigator menuOpenYn={isOpenMenu} />
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