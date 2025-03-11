import Link from "next/link";


interface SearchSystemProps {
  url: string;
  title: string;
}

export default function SearchSystem({url, title}: SearchSystemProps) {
    return (
        <section className="h-full bg-[#f6f7fa] p-4 rounded-xl lg:rounded-2xl overflow-hidden font-bold text-xl text-[#383940]">
          <Link href={url}>
            {title}
          </Link>
        </section>
    )
}