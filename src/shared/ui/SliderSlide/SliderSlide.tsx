'use client'

import clsx from 'clsx'
import { SwiperSlide, type SwiperSlideProps } from 'swiper/react'

export const SliderSlide = ({ className, children, ...props }: SwiperSlideProps) => {
	return (
		<SwiperSlide className={clsx(className)} {...props}>{children}</SwiperSlide>
	)
}