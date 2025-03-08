import Image from "next/image";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default function PhotoCarousel() {
  SwiperCore.use([Autoplay,Pagination]);
    return (
        <section className="justify-center w-full text-center">
          <Swiper
                modules={[Autoplay,Pagination]}
                loop={true} // Enable infinite looping
                slidesPerView={3}
                spaceBetween={10}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false
                }}
            >
            <SwiperSlide key={-1}>
              <Image
              width={512}
              height={512}
              src="/1.jpg"
              alt=""
              />
            </SwiperSlide>
            <SwiperSlide key={0}>
              <Image
              width={512}
              height={512}
              src="/2.jpg"
              alt=""
              />
            </SwiperSlide>
            <SwiperSlide key={1}>
              <Image
              width={512}
              height={512}
              src="/3.jpg"
              alt=""
              />
            </SwiperSlide>
            <SwiperSlide key={2}>
              <Image
              width={512}
              height={512}
              src="/1.jpg"
              alt=""
              />
            </SwiperSlide>
            <SwiperSlide key={3}>
              <Image
              width={512}
              height={512}
              src="/2.jpg"
              alt=""
              />
            </SwiperSlide>
            <SwiperSlide key={4}>
              <Image
              width={512}
              height={512}
              src="/3.jpg"
              alt=""
              />
            </SwiperSlide>
          </Swiper>
        </section>
    )
}