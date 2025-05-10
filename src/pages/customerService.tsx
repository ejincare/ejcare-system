import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Image from "next/image";


export default function customerService() {
  return (
    <div>
      <Header pageName={"subMenu"}/>    
      <main className="max-w-screen-xl mx-auto justify-center w-full text-center box-border px-5 xl:px-0 pt-[72px] mb-[100px]">
        <SubHeader title_kor={"회사소개"} title_eng={"Company"}/>

        <div className="block sm:flex items-start justify-start text-[#000] pt-[100px]">
          <div className="static top-[100px] w-auto sm:w-[40%] sm:sticky">
            <p className="mb-[1em] text-[1rem] font-[700] text-left">2014년부터 현재까지</p>
            <p className="sm:text-[3rem] text-[1.4rem] font-[700] leading-[1.3] text-left">고객과 함께 해온 이진케어시스템 역사</p>
          </div>
          <div className="flex-1 min-w-[50%] text-left sm:ml-[6em] mt-[1rem] sm:mt-0">
            <div className="flex flex-start min-w-[2.75em] mr-[2em]" data-year="2020">
              <p className="flex-1 max-w-[6rem] mr-[2em] sm:text-[2rem] text-[19px] font-[700] leading-[1.5]" >2020</p>
              <div className="text-[1rem] text-left">
                <p className="font-[300] leading-[1.75em] sm:text-[1.2rem] text-[13px] break-keep">주식회사 다구스토 설립(현 이진케어시스템)</p>
                <div className="mt-2 sm:mb-10 mb-5">
                  <Image
                    width={361}
                    height={239}
                    src="/file_1744077093_0.jpeg" 
                    alt=""
                    unoptimized
                    />
                </div>
              </div>
            </div>
            <div className="flex flex-start min-w-[2.75em] mr-[2em]" data-year="2014">
              <p className="flex-1 max-w-[6rem] mr-[2em] sm:text-[2rem] text-[19px] font-[700] leading-[1em]" >2014</p>
              <div className="text-[1rem] text-left">
                <p className="font-[300] leading-[1.75em] sm:text-[1.2rem] text-[13px] break-keep">경비/위생 인력관리 용역사업 출범</p>
                <div className="mt-2 sm:mb-10 mb-5">
                  <Image
                    width={361}
                    height={239}
                    src="/file_1744077093_0.jpeg" 
                    alt=""
                    unoptimized
                    />
                </div>
              </div>
            </div>       
            <div className="flex flex-start min-w-[2.75em] mr-[2em]" data-year="2013">
              <p className="flex-1 max-w-[6rem] mr-[2em] sm:text-[2rem] text-[19px] font-[700] leading-[1em]" >2013</p>
              <div className="text-[1rem] text-left">
                <p className="font-[300] leading-[1.75em] sm:text-[1.2rem] text-[13px] break-keep">건물 시설물 전문관리 회사 출범</p>
                <div className="mt-2 sm:mb-10 mb-5">
                  <Image
                    width={361}
                    height={239}
                    src="/file_1744077093_0.jpeg" 
                    alt=""
                    unoptimized
                    />
                </div>
                <p className="font-[300] leading-[1.75em] sm:text-[1.2rem] text-[13px] break-keep">건물 시설 유지 관리</p>
                <div className="mt-2 sm:mb-10 mb-5">
                  <Image
                    width={361}
                    height={239}
                    src="/file_1744077093_0.jpeg" 
                    alt=""
                    unoptimized
                    />
                </div>
              </div>
            </div>
            <div className="flex flex-start min-w-[2.75em] mr-[2em]" data-year="2011">
              <p className="flex-1 max-w-[6rem] mr-[2em] sm:text-[2rem] text-[19px] font-[700] leading-[1em]" >2012</p>
              <div className="text-[1rem] text-left">
                <p className="font-[300] leading-[1.75em] sm:text-[1.2rem] text-[13px] break-keep">건물 종합 인력 도급 관리업 진출</p>
                <div className="mt-2 sm:mb-10 mb-5">
                  <Image
                    width={361}
                    height={239}
                    src="/file_1744077093_0.jpeg" 
                    alt=""
                    unoptimized
                    />
                </div>
                <p className="font-[300] leading-[1.75em] sm:text-[1.2rem] text-[13px] break-keep">미화 관리 용역업 진출</p>
                <div className="mt-2 sm:mb-10 mb-5">
                  <Image
                    width={361}
                    height={239}
                    src="/file_1744077093_0.jpeg" 
                    alt=""
                    unoptimized
                    />
                </div>
              </div>                   
            </div>
            <div className="flex flex-start min-w-[2.75em] mr-[2em]" data-year="2011">
              <p className="flex-1 max-w-[6rem] mr-[2em] sm:text-[2rem] text-[19px] font-[700] leading-[1em]" >2011</p>
              <div className="text-[1rem] text-left">
                <p className="font-[300] leading-[1.75em] sm:text-[1.2rem] text-[13px] break-keep">대기업 협력 MOU 체결</p>
                <div className="mt-2 sm:mb-10 mb-5">
                  <Image
                    width={361}
                    height={239}
                    src="/file_1744077093_0.jpeg" 
                    alt=""
                    unoptimized
                    />
                </div>
                <p className="font-[300] leading-[1.75em] sm:text-[1.2rem] text-[13px] break-keep">조달청 입찰 전문 지원팀 신설</p>
                <div className="mt-2">
                  <Image
                    width={361}
                    height={239}
                    src="/file_1744077093_0.jpeg" 
                    alt=""
                    unoptimized
                    />
                </div>
              </div>  
            </div>    
            <div className="flex flex-start min-w-[2.75em] mr-[2em]" data-year="2010">
              <p className="flex-1 max-w-[6rem] mr-[2em] sm:text-[2rem] text-[19px] font-[700] leading-[1em]" >2010</p>
              <div className="text-[1rem] text-left">
                <p className="font-[300] leading-[1.75em] sm:text-[1.2rem] text-[13px] break-keep">건물 난방시공업 면허 취득</p>
                <div className="mt-2 sm:mb-10 mb-5">
                  <Image
                    width={361}
                    height={239}
                    src="/file_1744077093_0.jpeg" 
                    alt=""
                    unoptimized
                    />
                </div>
              </div>  
            </div>                                                          
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
