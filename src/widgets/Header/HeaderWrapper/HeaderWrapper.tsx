'use client'

import Link from 'next/link'
import styles from './HeaderWrapper.module.scss'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { Menu } from '../Menu/Menu'
import { Logo } from '@/entities/Logo'
import { Contacts } from '@/features/Contacts'
import { Select } from '@/shared/ui/Select'
import Image from 'next/image'
import { SelectItem } from '@/shared/ui/SelectItem'
import clsx from 'clsx'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export const HeaderWrapper = ({ lang, goods, translations, menuTranslatons }: {
	lang: string,
	goods: number,
	translations: { contact_button: string },
	menuTranslatons: {
		menu: {
			name: string
			href?: string
			submenu?: {
				name: string
				href: string
			}[]
		}[]
	}
}) => {
	const [isOpened, setIsOpened] = useState(false)
	const pathname = usePathname()
	const jumpURL = pathname.replace('/ru', '').replace('/et', '')

	return (
		<header className={styles.header}>
			<Container className={styles.top}>
				<Logo />
				<div className={styles.mainPart}>
					<Contacts className={styles.contacts} />
					<Select defaultValue={<>
						{lang === 'ru' &&
							<span className={styles.selectItem}>
								<Image src="/img/ru-flag.svg" alt="" width={20} height={20} /> Ru
							</span>
						}
						{lang === 'et' &&
							<span className={styles.selectItem}>
								<Image src="/img/et-flag.svg" alt="" width={20} height={20} /> Et
							</span>
						}
					</>}>
						{lang === 'et' &&
							<SelectItem>
								<Link prefetch={false} href={`/ru${jumpURL}`} className={styles.selectItem}>
									<Image src="/img/ru-flag.svg" alt="" width={20} height={20} /> Ru
								</Link>
							</SelectItem>
						}
						{lang === 'ru' &&
							<SelectItem><Link prefetch={false} href={`/et${jumpURL}`} className={styles.selectItem}>
								<Image src="/img/et-flag.svg" alt="" width={20} height={20} /> Et
							</Link></SelectItem>
						}
					</Select>
					<Link href={`/${lang}/cart`}><span className={clsx(styles.cart, goods && styles.hasGoods)}
						data-count={`${goods ? goods < 9 ? goods : '9+' : ''}`}>
						<svg className={styles.cartIcon} width="16" height="16" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M28.3775 5.84645C28.2788 5.7283 28.1553 5.63327 28.0158 5.56806C27.8763 5.50286 27.7242 5.46908 27.5702 5.46911H6.36008L5.71715 1.93759C5.62909 1.45287 5.3737 1.01444 4.99551 0.698722C4.61732 0.383005 4.14033 0.210032 3.64768 0.209961H1.27449C0.995523 0.209961 0.727986 0.320778 0.53073 0.518035C0.333474 0.715291 0.222656 0.982828 0.222656 1.26179C0.222656 1.54075 0.333474 1.80829 0.53073 2.00555C0.727986 2.2028 0.995523 2.31362 1.27449 2.31362H3.6411L7.0017 20.7588C7.10069 21.3058 7.34244 21.817 7.70248 22.2405C7.20555 22.7047 6.84688 23.2974 6.66624 23.9529C6.4856 24.6084 6.49004 25.3012 6.67909 25.9544C6.86813 26.6075 7.23438 27.1956 7.73722 27.6533C8.24007 28.111 8.85986 28.4206 9.52787 28.5475C10.1959 28.6745 10.886 28.614 11.5217 28.3727C12.1575 28.1314 12.7139 27.7188 13.1294 27.1805C13.545 26.6423 13.8033 25.9995 13.8758 25.3234C13.9483 24.6473 13.8321 23.9643 13.5401 23.3502H19.5119C19.2766 23.8428 19.1548 24.382 19.1556 24.9279C19.1556 25.6561 19.3715 26.3678 19.776 26.9732C20.1805 27.5786 20.7555 28.0505 21.4282 28.3291C22.1009 28.6078 22.8411 28.6807 23.5552 28.5386C24.2693 28.3966 24.9253 28.0459 25.4401 27.5311C25.955 27.0162 26.3056 26.3603 26.4477 25.6462C26.5897 24.932 26.5168 24.1918 26.2382 23.5191C25.9595 22.8464 25.4877 22.2715 24.8823 21.867C24.2769 21.4625 23.5651 21.2465 22.837 21.2465H10.1059C9.85958 21.2465 9.62108 21.16 9.43199 21.0022C9.2429 20.8443 9.1152 20.6251 9.07117 20.3827L8.65438 18.0911H23.9059C24.6449 18.091 25.3604 17.8315 25.9277 17.3579C26.4949 16.8843 26.878 16.2267 27.0101 15.4996L28.6089 6.70895C28.636 6.55701 28.6293 6.40098 28.5893 6.25192C28.5493 6.10287 28.477 5.96444 28.3775 5.84645ZM11.7928 24.9279C11.7928 25.24 11.7002 25.545 11.5269 25.8045C11.3535 26.064 11.1071 26.2662 10.8188 26.3856C10.5305 26.505 10.2133 26.5363 9.90723 26.4754C9.60118 26.4145 9.32005 26.2642 9.0994 26.0436C8.87875 25.8229 8.72848 25.5418 8.66761 25.2358C8.60673 24.9297 8.63797 24.6125 8.75739 24.3242C8.87681 24.0359 9.07903 23.7895 9.33849 23.6161C9.59795 23.4427 9.90299 23.3502 10.215 23.3502C10.6335 23.3502 11.0348 23.5164 11.3307 23.8123C11.6266 24.1082 11.7928 24.5095 11.7928 24.9279ZM24.4147 24.9279C24.4147 25.24 24.3222 25.545 24.1488 25.8045C23.9755 26.064 23.7291 26.2662 23.4408 26.3856C23.1525 26.505 22.8352 26.5363 22.5292 26.4754C22.2231 26.4145 21.942 26.2642 21.7214 26.0436C21.5007 25.8229 21.3504 25.5418 21.2896 25.2358C21.2287 24.9297 21.2599 24.6125 21.3793 24.3242C21.4988 24.0359 21.701 23.7895 21.9604 23.6161C22.2199 23.4427 22.5249 23.3502 22.837 23.3502C23.2554 23.3502 23.6567 23.5164 23.9526 23.8123C24.2485 24.1082 24.4147 24.5095 24.4147 24.9279ZM24.9406 15.1236C24.8965 15.3666 24.7682 15.5863 24.5783 15.7443C24.3884 15.9022 24.149 15.9883 23.902 15.9874H8.27178L6.74268 7.57277H26.3093L24.9406 15.1236Z" fill="white" />
						</svg>
					</span></Link>
					<Link prefetch={false} href="?modal=contact" className={styles.button}>
						<Button appearance="secondary" size="normal">{translations?.contact_button}</Button>
					</Link>
					<div className={styles.menuButton} onClick={() => { setIsOpened(!isOpened) }}><span></span></div>
				</div>
			</Container>
			<div className={styles.navigation}>
				<Container>
					<Menu translations={menuTranslatons} isOpened={isOpened} setIsOpened={setIsOpened} />
				</Container>
			</div>
		</header>
	)
}