import Image from "next/image";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default function PhotoCarousel() {
  SwiperCore.use([Autoplay,Pagination]);
  const data = [
    {
      name: "경기 용인시 S건물",
      floor: "지하 2층 ~ 지상 10층",
      area: "연면적 31,966.29m2",
      con: "상주, 미화관리",
      src: "/1.jpg",
      alt: "Image 1",
    }, {
      name: "경기 안성시 E건물",
      floor: "지하 3층 ~ 지상 29층",
      area: "연면적 69,384.00m2",
      con: "상주, 미화관리",      
      src: "/2.jpg",
      alt: "Image 2",
    }, {
      name: "경기 여주시 S건물",
      floor: "지하 2층 ~ 지상 20층",
      area: "연면적 57,569.7843m2",
      con: "상주, 미화관리",        
      src: "/1.jpg",
      alt: "Image 4",
    }, {
      name: "경기 이천시 I건물",
      floor: "지하 1층 ~ 지상 15층",
      area: "연면적 59,762.577m2",
      con: "상주, 미화관리",        
      src: "/2.jpg",
      alt: "Image 5",
    }, {
      name: "서울시 동대문구 H건물",
      floor: "지하 6층 ~ 지상 20층",
      area: "연면적 50,203.2415m2",
      con: "상주, 미화관리",        
      src: "/3.jpg",
      alt: "Image 6",
    }, {
      name: "경기 구리시 S건물",
      floor: "지하 2층 ~ 지상 27층",
      area: "연면적 15,472.80m2",
      con: "상주, 미화관리",        
      src: "/3.jpg",
      alt: "Image 6",
    }
  ]
    return (
        <section className="max-w-screen-xl mx-auto justify-center w-full text-center">
          <Swiper
                modules={[Autoplay,Pagination]}
                loop={true} // Enable infinite looping
                slidesPerView={1.2}
                spaceBetween={10}
                //autoplay={{
                //  delay: 1500,
                //  disableOnInteraction: false
                //}}
                breakpoints={{
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 10
                  },
                  768: {
                    slidesPerView: 2.2,
                    spaceBetween: 20
                  },
                  1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 30
                  }
                }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="lg:h-full rounded-[10px] overflow-hidden sm:flex sm:justify-between h-[400px] lg:max-h-[332px] bg-[#282828]">
                    <div className="relative flex-none sm:flex sm:justify-start flex-col justify-between bg-gray-05 p-6 md:pr-[30px] sm:w-auto text-left">
                      <h4 className="text-xl md:text-xl font-semibold leading-[140%] lg:p-0 text-[#e68600]">{item.name}</h4>
                      <div className="items-center justify-between lg:mt-10 lg:p-0 pt-5">
                        <div className="text-base text-[#d1d1d6]">{item.floor}</div>
                        <div className="text-xs text-gray-400">({item.area})</div>
                      </div>
                      <div className="grid grid-cols-2 lg:grid-cols-1 mt-5 text-[#d1d1d6] text-base">{item.con}</div>
                    </div>
                    <Image
                      width={512}
                      height={512}
                      src={item.src}
                      className="flex-none w-full sm:w-20 w-12 h-12 sm:h-50"
                      alt={item.alt}
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
    )
}