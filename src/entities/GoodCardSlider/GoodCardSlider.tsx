'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './GoodCardSlider.module.scss'
import Image from 'next/image'
import { Autoplay, EffectFade } from 'swiper/modules'

export const GoodCardSlider = ({ images }: { images: { id: number, src: string, alt: string }[] }) => {
	return (
		<div className={styles.wrapper}>
			<Swiper
				effect="fade"
				modules={[EffectFade, Autoplay]}
				autoplay={{ delay: 3000, waitForTransition: false, disableOnInteraction: false, pauseOnMouseEnter: false, stopOnLastSlide: false }}
			>
				{images?.map(image =>
					<SwiperSlide key={image.id} className={styles.image}>
						<div className={styles.slideWrapper}>
							<Image src={image?.src} alt={image?.alt} width={300} height={300} />
						</div>
					</SwiperSlide>
				)}
			</Swiper>
		</div>
	)
}