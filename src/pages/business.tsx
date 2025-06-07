import BusinessIconBoxWrap from "@/components/BusinessIconBoxWrap";
import Layout from "@/components/Layout";
import SubHeader from "@/components/SubHeader";
import Image from "next/image";

export default function business() {
  return (
    <Layout>  
      <main className="max-w-screen-xl mx-auto justify-center w-full text-center box-border px-5 xl:px-0 pt-[72px] pb-[100px]">
        <SubHeader title_kor={"사업분야"} title_eng={"Business"}/>

        <BusinessIconBoxWrap/>
        <div className="flex flex-col items-center justify-center">
          <Image src="/IMG_4636.png" alt="company" width={1000} height={1000} className="mx-auto mt-[100px]"/>
          <Image src="/IMG_4637.png" alt="company" width={1000} height={1000} className="mx-auto mt-[100px]"/>
        </div>
      </main>

    </Layout>
  );
}
