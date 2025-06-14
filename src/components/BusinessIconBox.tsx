import Image from "next/image";


interface IconBoxProps {
    iconPath: string;
    title: string;
    description: string;
}

export default function BusinessIconBoxWrap({iconPath, title, description}: IconBoxProps) {
    return (
        <div className="flex-1 flex flex-col gap-6 m-auto mt-12 max-w-[24rem]">
            <div className="flex gap-4 m-auto content-center items-center">
              <Image src={iconPath} alt="icon" className="flex-none w-12 h-12" width={48} height={48} />
              <h4 className="flex-1 text-xl font-bold text-center" dangerouslySetInnerHTML={{ __html: title }}></h4>           
            </div>
            <p className="text-base font-light text-center"dangerouslySetInnerHTML={{__html: description}}></p>
        </div>
    )
}