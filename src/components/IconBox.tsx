import Image from "next/image";


interface IconBoxProps {
    iconPath: string;
    title: string;
    description: string;
}

export default function IconBox({iconPath, title, description}: IconBoxProps) {
    return (
        <div className="flex-1 flex flex-col gap-6">

            <Image src={iconPath} alt="icon" className="flex-none w-full" width={48} height={48} />

            <p className="text-sm font-light">{description}</p>
        </div>
    )
}