import Header from "@/components/Header";


export default function inquiry() {
  return (
    <div>
      <Header pageName={"company"}/>    
      <main className="max-w-screen-xl mx-auto grid justify-center w-full text-center box-border px-5 xl:px-0 pt-[72px] gap-10 md:gap-[90px]" >
        <div className="flex flex-col items-center gap-[10px] mt-[100px]">
          <p className="text-[#e68600] text-[17px] text-[#e68600] md:text-xl font-medium md:font-semibold leading-[120%]">Inquiry</p>
          <h1 className="text-si-primary-text text-[28px] text-[#131f35] md:text-[46px] font-bold leading-[120%]">견적문의</h1>
        </div>

        <div className="bg-white md:bg-[#f2f2f6] rounded-[10px] px-4 pt-6 pb-8 md:p-16 flex flex-col gap-2 md:gap-5 text-si-primary-text">
        <div className="flex flex-col gap-2">
        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
      <label htmlFor="userName" className="font-medium leading-[120%] text-[17px] text-[#131f35] w-[120px] xl:w-[140px] py-[10px] mr-[10px]">이름<span className="text-[#e68600] ml-[6px]">*</span>
      </label>
      <div className="flex flex-col gap-2 md:max-w-[580px] flex-1 w-full text-[17px]">
        <input id="userName" name="userName" type="text" className="h-[52px] focus:outline-none focus:border-2 focus:border-si-gray-6 w-full leading-[120%] 900:max-w-[580px] border border-solid border-si-gray-3 rounded-[5px] p-4 placeholder:text-si-gray-6" placeholder="이름을 입력해 주세요." value="" />
        </div>
        </div>
        <div className="flex justify-between w-full md:max-w-[580px] ml-auto"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
            <label htmlFor="phoneNumber" className="font-medium leading-[120%] text-[17px] text-[#131f35] w-[120px] xl:w-[140px] py-[10px] mr-[10px]">연락처<span className="text-[#e68600] ml-[6px]">*</span>
            </label>
            <div className="flex flex-col gap-2 md:max-w-[580px] flex-1 w-full text-[17px]">
              <input id="phoneNumber" name="phoneNumber" type="text"  className="h-[52px] focus:outline-none focus:border-2 focus:border-si-gray-6 w-full leading-[120%] 900:max-w-[580px] border border-solid border-si-gray-3 rounded-[5px] p-4 placeholder:text-si-gray-6" placeholder="“-” 없이 숫자만 입력해 주세요." value="" /></div>
            </div>
              <div className="flex justify-between w-full md:max-w-[580px] ml-auto"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
                  <label htmlFor="email" className="font-medium leading-[120%] text-[17px] text-[#131f35] w-[120px] xl:w-[140px] py-[10px] mr-[10px]">이메일<span className="text-[#e68600] ml-[6px]">*</span>
                  </label>
                  <div className="flex flex-col gap-2 md:max-w-[580px] flex-1 w-full text-[17px]">
                    <input id="email" name="email" type="text"  className="h-[52px] focus:outline-none focus:border-2 focus:border-si-gray-6 w-full leading-[120%] 900:max-w-[580px] border border-solid border-si-gray-3 rounded-[5px] p-4 placeholder:text-si-gray-6" placeholder="이메일 주소를 입력해 주세요." value="" /></div>
                    </div>
                    <div className="flex justify-between w-full md:max-w-[580px] ml-auto"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
                        <label htmlFor="companyName" className="font-medium leading-[120%] text-[17px] text-[#131f35] w-[120px] xl:w-[140px] py-[10px] mr-[10px]">회사명<span className="text-[#e68600] ml-[6px]">*</span>
                        </label>
                        <div className="flex flex-col gap-2 md:max-w-[580px] flex-1 w-full text-[17px]">
                          <input id="companyName" name="companyName" type="text"  className="h-[52px] focus:outline-none focus:border-2 focus:border-si-gray-6 w-full leading-[120%] 900:max-w-[580px] border border-solid border-si-gray-3 rounded-[5px] p-4 placeholder:text-si-gray-6" placeholder="회사명을 입력해 주세요." value="" /></div>
                          </div>
                          <div className="flex justify-between w-full md:max-w-[580px] ml-auto"></div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
                              <label htmlFor="title" className="font-medium leading-[120%] text-[17px] text-[#131f35] w-[120px] xl:w-[140px] py-[10px] mr-[10px]">제목<span className="text-[#e68600] ml-[6px]">*</span></label>
                              <div className="flex flex-col gap-2 md:max-w-[580px] flex-1 w-full text-[17px]">
                                <input id="title" name="title" type="text"  className="h-[52px] focus:outline-none focus:border-2 focus:border-si-gray-6 w-full leading-[120%] 900:max-w-[580px] border border-solid border-si-gray-3 rounded-[5px] p-4 placeholder:text-si-gray-6" placeholder="제목을 입력해 주세요." value="" /></div>
                                </div>
                                <div className="flex justify-between w-full md:max-w-[580px] ml-auto"></div>
                                </div>
                                <div className="flex flex-col gap-2">
                                  <div className="w-full flex md:flex-row flex-col items-start gap-[10px] justify-between">
                                    <label htmlFor="detail" className="font-medium leading-[120%] text-[17px] text-[#131f35] w-[100px] xl:w-[140px] py-0 md:py-[10px]">내용<span className="text-[#e68600] ml-[6px]">*</span>
                                    </label>
                                    <div className="flex flex-col gap-2 flex-1 md:max-w-[580px] w-full">
                                      <textarea id="detail" name="detail"  className="focus:outline-none focus:border-2 focus:border-si-gray-6 w-full md:max-w-[580px] border border-solid border-si-gray-3 rounded-[5px] p-4 placeholder:text-si-gray-6" placeholder="- 문의 서비스 내용 :
- 최대 :
- 지역 :
- 요청 및 문의 :" ></textarea>
</div>
</div>
</div>
<div className="flex flex-col">
  <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
    <label htmlFor="funnel" className="font-medium leading-[120%] text-[17px] shrink-0 text-[#131f35] w-[100px] xl:w-[140px] py-[10px]  md:mr-[10px]">유입경로 <span className="text-[#e68600] font-medium text-[17px]">*</span>
    </label>
    <div className="flex items-center relative h-fit w-full md:max-w-[580px] ">
      <select id="funnel" name="funnel"  className="focus:outline-none focus:border-2 focus:border-si-gray-6 h-[52px] invalid:border-si-main-red border border-solid w-full border-si-gray-3 rounded-[5px] px-4 bg-white text-[17px] text-si-gray-6 md:text-si-primary-text appearance-none">
        <option value="광고">광고</option>
        <option value="도서">도서</option>
        <option value="지인소개">지인소개</option>
        <option value="인터넷 검색">인터넷 검색</option>
        <option value="기타">기타</option>
        </select>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none" className="rotate-0 transition-all absolute right-4">
        <path d="M10.7607 0H1.16847C0.315064 0 -0.146177 1.00019 0.407908 1.64926L5.08706 7.13056C5.47995 7.5908 6.18838 7.59936 6.59227 7.14876L11.5054 1.66746C12.0826 1.02348 11.6256 0 10.7607 0Z" fill="#8E8E93"></path>
        </svg>
        </div>
        </div>
        <div className="flex justify-between w-full md:max-w-[580px] ml-auto"></div>
        </div>
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
