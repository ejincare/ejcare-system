import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";


export default function businessPerformance() {
  return (
    <div>
      <Header pageName={"subMenu"}/>    
      <main className="max-w-screen-xl mx-auto flex justify-center w-full text-center box-border px-5 xl:px-0 pt-[72px]">
        <SubHeader title_kor={"사업실적"} title_eng={"Business Performance"}/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
