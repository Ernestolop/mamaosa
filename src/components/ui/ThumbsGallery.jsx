'use client';

import { useState } from 'react';
import styles from "./Ui.module.css";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


export const ThumbsGallery = ({ images }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <div className={styles.thumbs}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={false}
                spaceBetween={10}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={styles.thumbs__carrousel}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image src={image.url} alt={image.alt} width={400} height={400} className={styles.product__image} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={false}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={styles.thumbs__carrousel}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image src={image.url} alt={image.alt} width={100} height={100} className={styles.product__image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}