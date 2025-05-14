import Layout from "@/components/Layout";
import SubHeader from "@/components/SubHeader";


export default function businessPerformance() {
  return (
    <Layout>    
      <main className="max-w-screen-xl mx-auto flex justify-center w-full text-center box-border px-5 xl:px-0 pt-[72px]">
        <SubHeader title_kor={"사업실적"} title_eng={"Business Performance"}/>
      </main>
    </Layout>
  );
}
