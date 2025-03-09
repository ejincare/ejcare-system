import { faker } from '@faker-js/faker';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper/modules';
import "@/styles/keyvisual.css";

import 'swiper/css';
import SearchSystem from './SearchSystem';
export default function KeyVisual() {
/*
    const photos = [
        {
            url: faker.image.urlPicsumPhotos({ width: 128, height: 128 }),
            alt: faker.word.adjective(100)
        },
        {
            url: faker.image.urlPicsumPhotos({ width: 128, height: 128 }),
            alt: faker.word.adjective(100)
        },
        {
            url: faker.image.urlPicsumPhotos({ width: 128, height: 128 }),
            alt: faker.word.adjective(100)
        },
    ]
        */
    const photos = [
        {
            url: '/main_visual01.jpg',
            alt: '/main_visual01.jpg',
            className: 'pc',
            stitle: '이진케어시스템',
            ttitle: '이진케어시스템',
        },
        {
            url: '/main_visual01_m.jpg',
            alt: '/main_visual01_m.jpg',
            className: 'mobile',
            stext: '이진케어시스템',
            stitle: '이진케어시스템',
            ttitle: '이진케어시스템',
        },        
        {
            url: '/main_visual02.jpg',
            alt: '/main_visual02.jpg',
            className: 'pc',
            stext: '이진케어시스템',
            stitle: '이진케어시스템',
            ttitle: '이진케어시스템',
        },
        {
            url: '/main_visual02_m.jpg',
            alt: '/main_visual02_m.jpg',
            className: 'mobile',
            stext: '이진케어시스템',
            stitle: '이진케어시스템',
            ttitle: '이진케어시스템',
        },        
    ]
    return (
        <section className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-4">
            <div className="flex-1 w-full lg:w-4/5">
                <Swiper
                    modules={[Autoplay,Pagination]}
                    loop={true} // Enable infinite looping
                    // autoplay={{                    
                    //     delay: 2500,
                    // }}
                    className='rounded-xl sm:rounded-2xl filter shadow-lg'
                >
                    <SwiperSlide key={0} className='swiper-slide-keyvisual'>
                        <div className="relative w-full h-full">
                            <Image
                                src={photos[0].url}
                                width={1280}
                                height={960}
                                alt={photos[0].alt}
                                className='pc'
                            />
                            <Image
                                src={photos[1].url}
                                width={1280}
                                height={960}
                                alt={photos[1].alt}
                                className='mobile'
                            />
                            <div className="textOverlay flex flex-col items-start justify-center absolute top-0 right-0 z-20 w-1/2 h-full pl-12 leading-[1.3]">
                                <span className='sub_tit text-xl sm:text-2xl'>{photos[0].stitle}</span>
                                <span className='tit text-2xl sm:text-4xl'>{photos[0].ttitle}</span>
                                <div className="more_btn">
                                    <a href="#" className="inline-flex items-center whitespace-nowrap translate-y-full py-4 px-6 bg-[#2d3e4e] text-white text-base font-medium rounded-full leading-none" target="_self">
                                        View More
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#ffffff"><path d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"></path></svg>
                                    </a>
                                </div>
                            </div>                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={1} className='swiper-slide-keyvisual'>
                        <div className="relative w-full h-full">
                            <Image
                                src={photos[2].url}
                                width={600}
                                height={400}
                                alt={photos[2].alt}
                                className='pc'
                            />
                            <Image
                                src={photos[3].url}
                                width={300}
                                height={200}
                                alt={photos[3].alt}
                                className='mobile'
                            />
                            <div className="textOverlay flex flex-col items-start justify-center absolute top-0 right-0 z-20 w-1/2 h-full pl-12 leading-[1.3]">
                            <span className='sub_tit text-xl sm:text-2xl'>{photos[2].stitle}</span>
                            <span className='tit text-2xl sm:text-4xl'>{photos[2].ttitle}</span>
                                <div className="more_btn">
                                    <a href="#" className="inline-flex items-center whitespace-nowrap translate-y-full py-4 px-6 bg-[#2d3e4e] text-white text-base font-medium rounded-full leading-none" target="_self">
                                        View More
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>                  
            </div>
            <div className="w-full lg:w-1/5">
                <SearchSystem url='/search' title='조회시스템' />
            </div>
        </section>
    )
}