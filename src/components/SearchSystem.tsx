import Link from "next/link";


interface SearchSystemProps {
  url: string;
  title: string;
}

export default function SearchSystem({url, title}: SearchSystemProps) {
    return (
        <section className="bg-gray-100 p-4 rounded-xl lg:rounded-2xl overflow-hidden border border-[#d3d3d3] font-bold text-xl text-teal-600">
          <Link href={url}>
            {title}
          </Link>
        </section>
    )
}