

import Image from 'next/image';

export default function ConPartner() {
    return (
      <div className='bg-[#282828] ml-[-1.25rem] mr-[-1.25rem] p-10'>
        <section className="relative w-full mx-auto min-h-48 center text-gray-800 text-2xl font-bold">
          <div className="css-1c2fuzs">
            <div className="relative w-full mx-auto flex flex-col text-si-primary-text max-w-[1500px] w-full text-[#ffffff]">
              <h4 className="text-[28px] md:text-[56px] font-bold leading-[140%] mb-5 text-left ">반 발 앞서 준비하고, 먼저 고민합니다</h4>
              <p className="text-[17px] md:text-2xl font-medium leading-[155%] text-left">
                SANDI 얼라이언스는 S&amp;I와 함께하는 Open Innovation 파트너 입니다.<br/>
                공간 혁신을 선도하며 PFM 생태계를 구축할 오픈 이노베이션의 여정이 시작됩니다. 
              </p>
            </div>
          </div>
          <Image className='w-full' src="/img/partner.png" alt="partner" width={1920} height={1080} />

        </section>
      </div>
    )
}