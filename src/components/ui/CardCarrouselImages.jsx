'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import styles from "./Ui.module.css";




export const CardCarrouselImages = ({ images }) => {

  const [primaryColor, setPrimaryColor] = useState('#fff');

  useEffect(() => {
    setPrimaryColor(getComputedStyle(document.documentElement).getPropertyValue('--color-primary'));
  }, []);

  return (
    <Swiper
      style={{
        '--swiper-pagination-color': primaryColor,
        '--swiper-pagination-bullet-inactive-color': primaryColor,
        '--swiper-pagination-bullet-inactive-opacity': '0.8',
        '--swiper-pagination-bullet-width': '13px',
        '--swiper-pagination-bullet-height': '13px',
        '--swiper-pagination-bullet-border-radius': '50%'
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      className={styles.product__images}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image src={image.url} alt={image.alt} width={400} height={400} className={styles.product__image} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}