'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import styles from "./Ui.module.css";

export const CardCarrouselImages = ({ images }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
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