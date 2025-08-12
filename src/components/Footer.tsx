export default function Footer() {
    return (        
        <footer className="flex justify-center px-4 py-8 bg-[#f2f2f6] text-gray-800">
            <div className="flex flex-col max-w-[1190px] w-full">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <div className="flex flex-wrap text-[1rem] font-medium leading-4 gap-x-6 gap-y-3">
                    <a className="text-si-main-red" href="#">개인정보처리방침</a>
                    <button>이메일무단수집거부</button>
                </div>
                <section className="relative group flex h-fit w-fit items-start mt-4 lg:mt-0">
                    <button className="flex gap-4 lg:justify-between items-center border border-si-gray-6 rounded-[5px] w-fit lg:w-[165px] pl-[10px] pr-2 lg:px-4 h-8 lg:h-10">
                    <span className="text-[13px] lg:text-[15px] leading-[100%] text-si-gray-6">Family site</span>
                    </button>
                    <div className="absolute bottom-[100%] w-full h-3 bg-transparent"></div>
                    <div className="z-20 absolute bottom-[calc(100%+4px)] min-w-[140px] w-full group-hover:scale-100 scale-0 origin-top-right transition-all flex flex-col rounded-lg overflow-hidden border border-si-gray-6 bg-si-gray-1">
                        <a href="https://kij0423.mycafe24.com/user2/search_addr.php" target="_blank" rel="noopener noreferrer" className="w-full text-[13px] lg:text-[15px] leading-[100%] text-si-gray-6 px-4 py-3 hover:bg-si-gray-2">조회 시스템</a>
                    </div>
                </section>
                </div>
                <div className="flex lg:flex-row flex-col gap-4 mt-4 lg:mt-6 text-[0.875rem] leading-[0.875rem] items-center">
                <span class="flex items-center" style="gap: .3rem;">
                    <Image src={"/img/logo.png"} width={35} alt="" />
                    <strong>㈜이진케어시스템</strong>
                </span>
                <span>주소 : 서울특별시 영등포구 선유로130 206-1호</span><span>TEL : 02-2677-7511~3</span><span>FAX : 02-582-5582</span>
                </div>
                <div className="flex gap-2 mt-8 text-si-gray-6 text-[0.875rem] leading-[0.875rem]"><span>Copyright ⓒ</span><span>ejincare</span><span>All Rights Reserved.</span></div>
                <div className="flex flex-row items-center gap-2 mt-16 sm:gap-7">
                
                </div>
            </div>
        </footer>
    )
}