import Image from "next/image";


interface IconBoxProps {
    iconPath: string;
    title: string;
    description: string;
}

export default function IconBox({iconPath, title, description}: IconBoxProps) {
    return (
        <div className="flex-1 flex flex-col gap-6">
            <div className="flex gap-4">
              <Image src={iconPath} alt="icon" className="flex-none w-12 h-12" width={48} height={48} />
              <h4 className="flex-1 text-xl md:text-base font-bold" dangerouslySetInnerHTML={{ __html: title }}></h4>           
            </div>
            <p className="text-sm font-light">{description}</p>
        </div>
    )
}