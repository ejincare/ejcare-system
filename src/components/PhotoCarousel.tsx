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
                slidesPerView={1.2}
                spaceBetween={10}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false
                }}
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
            <SwiperSlide key={-1} className="drop-shadow-xs">
              <Image
              width={512}
              height={512}
              src="/1.jpg"
              className="rounded-lg filter shadow-lg"
              alt=""
              />
            </SwiperSlide>
            <SwiperSlide key={0}>
              <Image
              width={512}
              height={512}
              src="/2.jpg"
              className="rounded-lg filter shadow-xl"
              alt=""
              />
            </SwiperSlide>
            <SwiperSlide key={1}>
              <Image
              width={512}
              height={512}
              src="/3.jpg"
              className="rounded-lg"
              alt=""
              />
            </SwiperSlide>
            <SwiperSlide key={2}>
              <Image
              width={512}
              height={512}
              src="/1.jpg"
              className="rounded-lg"
              alt=""
              />
            </SwiperSlide>
            <SwiperSlide key={3}>
              <Image
              width={512}
              height={512}
              src="/2.jpg"
              className="rounded-lg"
              alt=""
              />
            </SwiperSlide>
            <SwiperSlide key={4}>
              <Image
              width={512}
              height={512}
              src="/3.jpg"
              className="rounded-lg"
              alt=""
              />
            </SwiperSlide>
          </Swiper>
        </section>
    )
}