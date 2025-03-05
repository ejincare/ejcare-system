import Link from "next/link";

export default function Navigator() {
    return (
      <ul className="depth1">
        <li className="">
          <Link href={"/"} >
            contact
          </Link>
        </li>
      </ul>
    )
}