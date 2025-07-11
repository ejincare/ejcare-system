

import Image from 'next/image';
import { motion } from "motion/react"

export default function ConPartner() {
    return (
      <div className='bg-[#282828] ml-[-1.25rem] mr-[-1.25rem] px-[1.25rem] py-[70px] sm:py-[8rem]'>
        <section className="relative w-full mx-auto min-h-48 center text-gray-800 text-2xl font-bold">
          <div className="css-1c2fuzs sm:px-5">
            <div className="relative w-full mx-auto flex flex-col text-si-primary-text max-w-[1500px] w-full text-[#ffffff]">
              <motion.h4 className="text-[28px] md:text-[56px] font-bold leading-[140%] mb-5 text-left "
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              >
                반 발 앞서 준비하고, 먼저 고민합니다
              </motion.h4>
              <motion.p className="text-[16px] md:text-[21px] font-medium leading-[155%] mb-5 text-left"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              >
                주식회사 이진케어시스템은 고객만족을 최고의 가치로<br/>
                여기는 One-Stop 상담서비스를 운영하고 있습니다.
              </motion.p>        
            </div>
          </div>
          <motion.div className='w-full'
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          >
            <Image className='w-full' src="/img/partner.jpg" alt="partner" width={1920} height={1080} />
          </motion.div>
        </section>
      </div>
    )
}