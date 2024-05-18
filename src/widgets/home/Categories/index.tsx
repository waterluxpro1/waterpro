import { Container } from '@/shared/ui/Container'
import styles from './Categories.module.scss'
import { Category } from '@/entities/Category'

export const Categories = ({ cards, more_button }: {
	more_button: string
	cards: {
		title: string, href: string, image: string
	}[]
}) => {
	return (
		<Container className={styles.container}>
			{cards && cards?.map(category =>
				<Category key={category.href} href={category.href} image={category.image} title={category.title} buttonText={more_button} />
			)}
		</Container>
	)
}