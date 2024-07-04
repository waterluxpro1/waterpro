import { wordpress } from '@/shared/api/wordpress.service'
import { Container } from '@/shared/ui/Container'
import styles from './page.module.scss'
import { OverflowImage } from '@/shared/ui/OverflowImage/OverflowImage'
import Image from 'next/image'
import { Title1 } from '@/shared/ui/Title1/Title1'
import { redirect } from 'next/navigation'

const DocumentPage = async ({ params }: { params: { slug: string, locale: string } }) => {
	const [document] = await wordpress.getPage(params.slug)

	console.log(document)

	if (document.lang !== params.locale) {
		console.log('lang !== locale')
		const localedDocument = await wordpress.getPageById(document.translations[params.locale])

		if (localedDocument) {
			redirect(`/${params.locale}/doc/${localedDocument.slug}`)
		}
	}

	return (
		<>
			<OverflowImage
				content={<div>
					<Title1 className={styles.title} dangerouslySetInnerHTML={{ __html: document.title.rendered }}></Title1>
				</div>}
				image={
					<Image className={styles.image}
						src="/img/modern-water-filtration-system.png"
						alt="modern-water-filtration-system.png"
						width={1000}
						height={500}
					/>
				}
			/>
			<Container>
				<div className={styles.eval} dangerouslySetInnerHTML={{ __html: document.content.rendered }}></div>
			</Container>
		</>
	)
}

export default DocumentPage