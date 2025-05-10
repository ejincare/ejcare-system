import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";


export default function customerService() {
  return (
    <div>
      <Header pageName={"subMenu"}/>    
      <main className="max-w-screen-xl mx-auto justify-center w-full text-center box-border px-5 xl:px-0 pt-[72px] pb-[100px]">
        <SubHeader title_kor={"공지사항"} title_eng={"Notice"}/>

         <div className="pt-[100px]">
            <div className="flex items-center justify-start text-[1rem] font-[600] text-center border-t text-[#1f2937] border-black border-solid" >
                <div className="w-[6%] py-[1.4rem] px-[0]">번호</div>
                <div className="flex-1">제목</div>
                <div className="w-[13%] shrink-0">작성자</div>
                <div className="w-[13%] shrink-0">접수일자</div>
            </div>
            <div>
              <a href="javascript:void(0);" className="flex items-center justify-start py-[1.4rem] px-[0] border-t text-[#1f2937] border-[#e5e5e5] border-solid" onclick="window.open('https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20240930800345', '_blank', 'width=600,height=800,resizable=yes,scrollbars=yes,status=yes');">
                  <div className="w-[6%] text-[#B3B3B3] font-[600] text-center">121</div>
                  <div className="flex-1 font-[600] text-left">대표이사 변경의 건</div>
                  <div className="w-[13%] shrink-0">관리자</div>
                  <div className="w-[13%] text-[#B3B3B3] shrink-0">2024-09-30</div>
              </a>        
            </div>
        </div> 

        {/* <ul class="pagination">
          <a href="?p=319&amp;page=1&amp;page=1" class="first">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M52.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l192 192c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L86.6 256 267.3 75.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-192 192zm384-192l-192 192c-6.2 6.2-6.2 16.4 0 22.6l192 192c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L278.6 256 459.3 75.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0z"></path>
            </svg>
          </a>
          <a href="#url" class="prev">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                  <path d="M20.7 267.3c-6.2-6.2-6.2-16.4 0-22.6l192-192c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 256 235.3 436.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-192-192z"></path>
              </svg>
          </a>
                
            <ul class="num_list">
              <li class="active"><a href="#url" class="first">1</a></li>
              <li><a href=""></a></li>
              <li><a href="?p=319&amp;page=1&amp;page=3">3</a></li>               
            </ul>

            <a href="?p=319&amp;page=1&amp;page=11" class="next">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                  <path d="M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z"></path>
              </svg>
            </a>
            <a href="?p=319&amp;page=1&amp;page=13" class="last">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                  <path d="M75.3 459.3l192-192c6.2-6.2 6.2-16.4 0-22.6l-192-192c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L233.4 256 52.7 436.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0zm192 0l192-192c6.2-6.2 6.2-16.4 0-22.6l-192-192c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L425.4 256 244.7 436.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z"></path>
              </svg>
            </a>
                
          </ul> */}

      </main>
      <Footer />
    </div>
  );
}
