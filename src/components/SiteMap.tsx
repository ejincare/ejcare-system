import Link from "next/link";
import React from "react";

const SiteMap = () => {

  const menuList = [
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
      <div className="cont">
        <ul className="list mt-3 flex flex-col text-left">
          {menuList.map((menu) => (
            <li className="depth1 px-4 py-3" key={menu.id}>
              <Link href={menu.href} className="text-white block">
                {menu.title}
              </Link>
              <ul className="depth1 flex flex-col items-start mt-4">
                {/* 서브메뉴가 있을 경우에만 서브메뉴를 렌더링 */}
                {menu.submenu && menu.submenu.map(subMenu => (
                  <li key={menu.id + subMenu.id} className="text-sm">
                  <Link href={subMenu.href} className="inline-block text-[#333] py-2">
                    {subMenu.title}
                  </Link>
                  </li>
                ))}
              </ul>              
            </li>
          ))}
        </ul>
      </div>
    )
}

export default SiteMap;