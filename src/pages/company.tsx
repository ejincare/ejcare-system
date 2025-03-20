import Header from "@/components/Header";
import Image from "next/image";


export default function company() {
  return (
    <div>
      <Header pageName={"company"}/>    
      <main className="max-w-screen-xl mx-auto justify-center w-full text-center box-border px-5 xl:px-0 pt-[72px]">
        <div className="flex-col items-center gap-[10px] mt-[100px]">
          <p className="text-si-main-red text-[17px] text-[#e68600] md:text-xl font-medium md:font-semibold leading-[120%]">Company</p>
          <h1 className="text-si-primary-text text-[28px] text-[#131f35] md:text-[46px] font-bold leading-[120%]">회사소개</h1>
        </div>
        <div>
          <Image src="/IMG_4636.png" alt="company" width={1000} height={1000} className="mx-auto mt-[100px]"/>
        </div>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
