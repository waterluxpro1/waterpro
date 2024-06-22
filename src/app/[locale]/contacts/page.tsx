import { Container } from '@/shared/ui/Container'
import styles from './page.module.scss'
import { OverflowImage } from '@/shared/ui/OverflowImage/OverflowImage'
import Image from 'next/image'
import { Body1 } from '@/shared/ui/Body1'
import { Title1 } from '@/shared/ui/Title1/Title1'
import { wordpress } from '@/shared/api/wordpress.service'
import { headers } from 'next/headers'

export const generateMetadata = async ({ params }: { params: { locale: string } }) => {
	const translations = await wordpress.getTranslations('contacts', params.locale)

	return {
		title: `${translations.h1} | Water PRO`,
		openGraph: {
			url: headers().get('referer') ? headers().get('referer')! : 'https://www.waterpro.ee'
		}
	}
}

const Contacts = async ({ params }: { params: { locale: string } }) => {
	const translations = await wordpress.getTranslations('contacts', params.locale)

	return (
		<>
			<OverflowImage
				content={
					<div className={styles.head}>
						<Title1>{translations.h1}</Title1>
					</div>
				}
				image={<Image className={styles.image} src="/img/drops.png" alt="Капли воды" width={1000} height={480} />}
			/>
			<Container className={styles.container}>
				<div className={styles.card}>
					<ul className={styles.info}>
						<li>WaterPro OÜ</li>
						<li>info@waterpro.ee</li>
						<li>Tel. +372 56484797</li>
						<li>Reg.nr.14608633</li>
						<li>Swedbank</li>
						<li>nr.EE402200221070576725</li>
					</ul>
					<Body1 className={styles.body}>{translations.addition}</Body1>
				</div>
				<div className={styles.map} style={{ position: 'relative', overflow: 'hidden' }}> <iframe src="https://yandex.ru/map-widget/v1/?ll=25.012326%2C59.483536&mode=whatshere&whatshere%5Bpoint%5D=25.007525%2C59.483749&whatshere%5Bzoom%5D=17&z=15&lang=en_US" width="100%" height="100%" style={{ position: 'relative' }}></iframe></div>
			</Container >
		</>
	)
}

export default Contacts
