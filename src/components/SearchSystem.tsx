import Link from "next/link";


export default function SearchSystem() {
    return (
        <section className="bg-gray-100 p-4 font-bold text-xl text-teal-600">
          <Link href="/search">
            조회시스템
          </Link>
        </section>
    )
}