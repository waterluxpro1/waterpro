import { Container } from '@/shared/ui/Container'
import styles from './Categories.module.scss'
import { Category } from '@/entities/Category'
import { wordpress } from '@/shared/api/wordpress.service'

export const Categories = async ({ categories }: {
	categories: {
		name: string, url: string, image: number
	}[]
}) => {
	return (
		<Container className={styles.container}>
			{await Promise.all(categories.map(async category =>
				<Category key={category.url} href="#" image={(await wordpress.getMediaById(category.image)).source_url} title={category.name} />
			))}
		</Container>
	)
}