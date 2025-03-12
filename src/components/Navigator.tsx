import Link from "next/link";

export default function Navigator() {

    const menuList = [
      {
        id: '1',
        title: '회사소개',
        href: './'
      },
      {
        id: '2',
        title: '사업분야',
        href: './'
      },
      {
        id: '3',
        title: '견적문의',
        href: './'
      },
      {
        id: '4',
        title: '사업실적',
        href: './'
      },
      {
        id: '5',
        title: '고객센터',
        href: './'
      },            
    ]

    return (
      <ul className="depth1">
        {menuList.map((menu) => (
          <li className="" key={menu.id}>
            <Link href={menu.href} className="text-white">
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    )
}