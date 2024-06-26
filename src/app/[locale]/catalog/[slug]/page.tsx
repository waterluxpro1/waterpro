import { Good } from '@/entities/Good/Good'
import { woocomerence, wordpress } from '@/shared/api/wordpress.service'
import { Container } from '@/shared/ui/Container'
import { OverflowImage } from '@/shared/ui/OverflowImage/OverflowImage'
import styles from './page.module.scss'
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import { BreadcrumbsItem } from '@/shared/ui/BreadcrumbsItem/BreadcrumbsItem'
import { Title1 } from '@/shared/ui/Title1/Title1'
import Image from 'next/image'
import { headers } from 'next/headers'

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
	const [category] = await woocomerence.getCategoryBySlug(params.slug)

	return {
		title: `${category.name} | Water PRO`,
		openGraph: {
			url: headers().get('referer') ? headers().get('referer')! : 'https://www.waterpro.ee'
		}
	}
}

const CatalogPage = async ({ params }: { params: { slug: string, locale: string } }) => {
	const [category] = await woocomerence.getCategoryBySlug(params.slug)
	const goods = await woocomerence.getGoodsByCategoryId(category.id)
	const translations = await wordpress.getTranslations('category', params.locale)

	return (
		<>
			<OverflowImage
				content={<div className={styles.content}>
					<Breadcrumbs>
						<BreadcrumbsItem first>{translations.home}</BreadcrumbsItem>
						<BreadcrumbsItem>{category.name}</BreadcrumbsItem>
					</Breadcrumbs>
					<Title1 className={styles.title}>{category.name}</Title1>
				</div>}
				image=
				{category.image
					? <Image className={styles.image} src={category.image.src} alt={category.image.alt} width={900} height={400} />
					: <Image className={styles.image} src="/img/modern-water-filtration-system.png" alt="Modern water filtration system" width={900} height={400} />
				}
			/>
			<article className={styles.goods}>
				<Container className={styles.grid}>
					{goods.map((good) =>
						<Good
							key={good.id}
							url={`/${params.locale}/good/${good.slug}`}
							good={good}
							detailsButton={translations.details}
						/>
					)}
				</Container>
			</article>
		</>
	)
}

export default CatalogPage