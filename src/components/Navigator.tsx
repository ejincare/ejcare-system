import Link from "next/link";
import { useEffect, useState } from "react";

interface menuOpenYnType {
  menuOpenYn: boolean;
}
interface submenuType{
  id: boolean;
  title:String;
  href:String;
}
interface MenuList {
  id: boolean;
  title:String;
  href:String;
  submenu:[submenuType];
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

  const menuList: MenuList = [
    {
      id: '1',
      title: '회사소개',
      href: './customerService',
      submenu :[
        { id:'1_1', title:"연혁", href:'./customerService' },
        { id:'1_2', title:"오시는 길", href:'./company' }
      ]
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
      title: '고객센터',
      href: './notice',
      submenu:[
        { id:'5_1', title:"공지사항", href:'./notice' }
      ]
    },            
  ]

    return (
     <>
      {menuList.map((menu) => (
      <>
        <ul className="depth1">
          <li className="" key={menu.id}>
            <Link href={menu.href} className={fontColor}>
              {menu.title}
            </Link>
          </li>
        </ul>
        <ul>
          {menu.submenu.map(subMenu => (
             
             <li className="" key={menu.id}>
             <Link href={subMenu.href} className="text-black">
               {subMenu.title}
             </Link>
           </li>

          ))}

            <li></li>
            <li></li>
          </ul>
          </>
        ))}
    </>
    )
}