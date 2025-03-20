import Header from "@/components/Header";


export default function customerService() {
  return (
    <div>
      <Header pageName={"company"}/>    
      <main className="max-w-screen-xl mx-auto flex justify-center w-full text-center box-border px-5 xl:px-0 pt-[72px]">
        <div className="w-fit flex flex-col items-center gap-[10px] mt-[100px]">
          <p className="text-si-main-red text-[17px] text-[#e68600] md:text-xl font-medium md:font-semibold leading-[120%]">Customer Service</p>
        <h1 className="text-si-primary-text text-[28px] md:text-[46px] font-bold leading-[120%]">고객센터</h1></div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
