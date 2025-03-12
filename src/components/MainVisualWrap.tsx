import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper/modules';

import 'swiper/css';
import Header from './Header';
import KeyVisual from './KeyVisual';
export default function MainVisualWrap() {
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
        <SwiperSlide key={0} className='swiper-slide-keyvisual'>
        <div className="bg-cover h-screen" style={{backgroundImage: `url(${photos[0].url})`}}>
            <Header />
            <KeyVisual />
        </div>
        </SwiperSlide>        
    )
}