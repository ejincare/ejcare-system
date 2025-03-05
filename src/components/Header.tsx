import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import Navigator from "./Navigator";
import ShareBtn from "./ShareBtn";
import HamburgerBtn from "./HamburgerBtn";
import SiteMap from "./SiteMap";
import $ from 'jquery';

export default function Header() {
  function SiteMapOpen() {
    $(".sitemap").toggleClass("on");
    
  }

    return (
        <div id="header">
            <h1 className="logo">
                <Link href={"/"} className="logo">
                    <Image src={"/img/logo.png"} width={30} height={30} alt="" />
                    <span>이진케어시스템</span>
                </Link>
            </h1>
            <nav>
                <Navigator />
            </nav>
            <div className="right_btn" onClick={SiteMapOpen}>
                <HamburgerBtn />
            </div>
            <div className="sitemap">
                <SiteMap />
            </div>
        </div>
    )
}