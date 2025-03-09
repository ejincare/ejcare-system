

import Image from 'next/image';

export default function ConPartner() {
    return (
        <section className="relative w-full mx-auto min-h-48 p-4 center text-gray-800 text-2xl font-bold">
          <div className="css-1c2fuzs">
            <div className="relative w-full mx-auto flex flex-col items-center gap-5 md:gap-12 text-si-primary-text max-w-[1500px] w-full px-4">
              <h4 className="text-[28px] md:text-[56px] font-bold leading-[140%] mb-5 text-center">SANDI 얼라이언스</h4>
              <p className="text-[17px] md:text-2xl font-medium leading-[155%] text-center">
                SANDI 얼라이언스는 S&amp;I와 함께하는 Open Innovation 파트너 입니다.<br/>
                공간 혁신을 선도하며 PFM 생태계를 구축할 오픈 이노베이션의 여정이 시작됩니다. 
              </p>
            </div>
          </div>
          <Image src="/img/partner.png" alt="partner" width={1920} height={1080} />

        </section>
    )
}