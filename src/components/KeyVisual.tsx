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
            url: '/1.jpg',
            alt: '/1.jpg'
        },
        {
            url: '/2.jpg',
            alt: '/2.jpg'
        },
        {
            url: '/3.jpg',
            alt: '/3.jpg'
        },
    ]
    return (
        <section>               
            <Swiper
                modules={[Autoplay,Pagination]}
                loop={true} // Enable infinite looping
                autoplay={{
                    delay: 2500,

                }}
            >
                {photos.map((photo, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={photo.url}
                        width={300}
                        height={200}
                        alt={photo.alt}
                    />
                </SwiperSlide>
                ))}
            </Swiper>                  
        </section>
    )
}