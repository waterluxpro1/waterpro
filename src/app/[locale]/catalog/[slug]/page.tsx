import { Good } from '@/entities/Good/Good'
import { woocomerence } from '@/shared/api/wordpress.service'
import { Container } from '@/shared/ui/Container'
import { OverflowImage } from '@/shared/ui/OverflowImage/OverflowImage'
import styles from './page.module.scss'
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import { BreadcrumbsItem } from '@/shared/ui/BreadcrumbsItem/BreadcrumbsItem'
import { Title1 } from '@/shared/ui/Title1/Title1'

const CatalogPage = async ({ params }: { params: { slug: string, locale: string } }) => {
	const [category] = await woocomerence.getCategoryBySlug(params.slug)
	const goods = await woocomerence.getGoodsByCategoryId(category.id)

	return (
		<>
			<OverflowImage
				content={<div className={styles.content}>
					<Breadcrumbs>
						<BreadcrumbsItem first>Главная</BreadcrumbsItem>
						<BreadcrumbsItem>{category.name}</BreadcrumbsItem>
					</Breadcrumbs>
					<Title1 className={styles.title}>{category.name}</Title1>
				</div>}
				image={
					<picture>
						{category.image
							? <source srcSet={category.image.src} media="(min-width: 768px)" />
							: <source srcSet="/img/modern-water-filtration-system.png" media="(min-width: 768px)" />
						}
						<source srcSet="/img/drops.png" media="(max-width: 769px)" />
						<img className={styles.image} src="/img/modern-water-filtration-system.png" alt="" />
					</picture>
				}
			/>
			<article className={styles.goods}>
				<Container className={styles.grid}>
					{goods.map((good) =>
						<Good
							key={good.id}
							url={`/${params.locale}/good/${good.slug}`}
							good={good}
						/>
					)}
				</Container>
			</article>
		</>
	)
}

export default CatalogPage