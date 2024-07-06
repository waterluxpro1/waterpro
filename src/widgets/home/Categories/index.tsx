import { Container } from '@/shared/ui/Container'
import styles from './Categories.module.scss'
import { Category } from '@/entities/Category'
import type { CategoriesProps } from './Categories.props'

export const Categories = ({ cards, more_button }: CategoriesProps) => {
	return (
		<Container className={styles.container}>
			{cards && cards?.map(category =>
				<Category key={category.href} href={category.href} image={category.image} title={category.title} buttonText={more_button} />
			)}
		</Container>
	)
}