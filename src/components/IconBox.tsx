import Image from "next/image";


interface IconBoxProps {
    index: number;
    iconPath: string;
    title: string;
    description: string;
}

export default function IconBox({index, iconPath, title, description}: IconBoxProps) {
    return (
        <li>            
            <Image src={iconPath} alt="icon" className="flex-none w-full" width={48} height={48} />
            <div className="text-[15px] sm:text-[19px] block leading-[1.3] mt-3">{title}</div>
            <div className="text-[13px] font-light leading-[1.6667em] mt-3">{description}</div>
        </li>
    )
}