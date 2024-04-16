import { Container } from '@/shared/ui/Container'
import styles from './Categories.module.scss'
import { Category } from '@/entities/Category'

export const Categories = ({ categories }: {
	categories: {
		name: string, url: string, image: string
	}[]
}) => {
	return (
		<Container className={styles.container}>
			{categories && categories.map(category =>
				<Category key={category.url} href="#" image={category.image} title={category.name} />
			)}
		</Container>
	)
}