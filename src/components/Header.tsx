import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import Navigator from "./Navigator";
import ShareBtn from "./ShareBtn";
import HamburgerBtn from "./HamburgerBtn";

export default function Header() {
    return (
        <div>
            <h1 className="logo">
                <Link href={"/"}>
                    <Image src={"/img/logo.svg"} width={141} height={36} alt="" />
                </Link>
            </h1>
            <nav>
                <Navigator />
            </nav>
            <div className="right_btn">
                <ShareBtn />
                <HamburgerBtn />
            </div>
        </div>
    )
}