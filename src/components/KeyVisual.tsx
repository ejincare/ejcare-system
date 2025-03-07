import { faker } from '@faker-js/faker';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper/modules';

import 'swiper/css';
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
            ttitle: '이진케어시스템',
        },
        {
            url: '/main_visual02_m.jpg',
            alt: '/main_visual02_m.jpg',
            className: 'mobile',
            text: '이진케어시스템',
            ttitle: '이진케어시스템',
        },        
    ]
    return (
        <section>               
            <Swiper
                modules={[Autoplay,Pagination]}
                loop={true} // Enable infinite looping
                // autoplay={{                    
                //     delay: 2500,
                // }}
            >                
                <SwiperSlide key={0}>
                    <div className="imageContainer">
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
                        <div className="textOverlay">
                            <span className='sub_tit'>{photos[0].stitle}</span>
                            <span className='tit'>{photos[0].ttitle}</span>
                            <div className="more_btn">
                                <a href="#" className="more" target="_self">
                                    View More
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#ffffff"><path d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"></path></svg>
                                </a>
                            </div>
                        </div>                        
                    </div>
                </SwiperSlide>
                <SwiperSlide key={1}>
                    <div className="imageContainer">
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
                        <div className="textOverlay">
                            <span className='sub_tit'>{photos[2].stitle}</span>
                            <span className='tit'>{photos[2].ttitle}</span>
                            <div className="more_btn">
                                <a href="#" className="more" target="_self">
                                    View More
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>                  
        </section>
    )
}