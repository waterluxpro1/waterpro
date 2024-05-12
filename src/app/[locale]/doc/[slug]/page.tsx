import { wordpress } from '@/shared/api/wordpress.service'
import { Container } from '@/shared/ui/Container'
import styles from './page.module.scss'
import { OverflowImage } from '@/shared/ui/OverflowImage/OverflowImage'
import Image from 'next/image'

const DocumentPage = async ({ params }: { params: { slug: string } }) => {
	const [document] = await wordpress.getPage(params.slug)

	return (
		<>
			<OverflowImage
				content={<div>
					<h1 className={styles.title} dangerouslySetInnerHTML={{ __html: document.title.rendered }}></h1>
				</div>}
				image={
					<Image
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