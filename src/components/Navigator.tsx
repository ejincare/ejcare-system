import Link from "next/link";
import { useEffect, useState } from "react";

interface menuOpenYnType {
  menuOpenYn: boolean;
}

export default function Navigator({menuOpenYn}: menuOpenYnType) {
  const [fontColor, setFontColor] = useState("text-white");
  useEffect(() => {
    console.log("menuOpenYn", menuOpenYn);
    
    if (menuOpenYn) {
      setFontColor("text-black");
    } else {
      setFontColor("text-white");
    }
  }, [menuOpenYn]);

    const menuList = [
      {
        id: '1',
        title: '회사소개',
        href: './customerService'
      },
      {
        id: '2',
        title: '사업분야',
        href: './business'
      },
      {
        id: '3',
        title: '견적문의',
        href: './inquiry'
      },
      {
        id: '4',
        title: '사업실적',
        href: './businessPerformance'
      },
      {
        id: '5',
        title: 'Contact us',
        href: './company'
      },            
    ]
// console.log(menuOpenYn);
    return (
      <ul className="depth1">
        {menuList.map((menu) => (
          <li className="" key={menu.id}>
            <Link href={menu.href} className={fontColor}>
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    )
}