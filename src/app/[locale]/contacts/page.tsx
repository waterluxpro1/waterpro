import { Container } from '@/shared/ui/Container'
import styles from './page.module.scss'
import { OverflowImage } from '@/shared/ui/OverflowImage/OverflowImage'
import { Title1 } from '@/shared/ui/Title1/Title1'
import Image from 'next/image'

const Contacts = async ({ params }: { params: { locale: string } }) => {
	const translation = await import(`@/shared/locales/${params.locale}/contacts.json`)

	return (
		<>
			<OverflowImage
				content={
					<div className={styles.head}>
						<Title1>{translation.h1}</Title1>
					</div>
				}
				image={<Image src="/img/drops.png" alt="Капли воды" width={1000} height={480} />}
			/>
			<Container className={styles.container}>
				<ul className={styles.info}>
					<li>WaterPro OÜ</li>
					<li>info@waterpro.ee</li>
					<li>Tel. +372 56484797</li>
					<li>Tähe tee 24, Uusküla, Jõelähtme vald, 74120, Eesti</li>
					<li>Reg.nr.14608633</li>
					<li>Swedbank</li>
					<li>nr.EE402200221070576725</li>
				</ul>
				<div className={styles.map} style={{ position: 'relative', overflow: 'hidden' }}> <iframe src="https://yandex.ru/map-widget/v1/?ll=25.012326%2C59.483536&mode=whatshere&whatshere%5Bpoint%5D=25.007525%2C59.483749&whatshere%5Bzoom%5D=17&z=15&lang=en_US" width="100%" height="100%" style={{ position: 'relative' }}></iframe></div>
			</Container >
		</>
	)
}

export default Contacts
