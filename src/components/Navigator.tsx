import Link from "next/link";

export default function Navigator() {

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