import Image from "next/image";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default function PhotoCarousel() {
  SwiperCore.use([Autoplay,Pagination]);
  const data = [
    {
      src: "/1.jpg",
      alt: "Image 1",
    }, {
      src: "/2.jpg",
      alt: "Image 2",
    }, {
      src: "/3.jpg",
      alt: "Image 3",
    }, {
      src: "/1.jpg",
      alt: "Image 4",
    }, {
      src: "/2.jpg",
      alt: "Image 5",
    }, {
      src: "/3.jpg",
      alt: "Image 6",
    }
  ]
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
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image
                    width={512}
                    height={512}
                    src={item.src}
                    className="rounded-lg"
                    alt={item.alt}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
    )
}