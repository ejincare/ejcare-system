import Image from "next/image";
import Link from "next/link";
import $ from 'jquery';

export default function SiteMap() {
  function SiteMapClose() {
    $(".sitemap").toggleClass("on"); 
  }
    return (
      <div className="cont">
        <div className="top">
            <p className="en_tit notranslate">Site Map</p>
            <div className="sitemap_logo">
              <Link href={"/"} className="logo">
                <Image src={"/img/logo.png"} width={30} height={30} alt="" />
                <span>이진케어시스템</span>
              </Link>
            </div>
            <div className="close_btn" onClick={SiteMapClose}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.5 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z">
                    </path>
                </svg>
            </div>
        </div>
        <ul className="list">
          <li className="depth1"></li>
        </ul>
      </div>
    )
}