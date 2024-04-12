import { Container } from '@/shared/ui/Container'
import styles from './Categories.module.scss'
import { Category } from '@/entities/Category'

export const Categories = () => {
	return (
		<Container className={styles.container}>
			<Category href="#" image="/img/categories/water-treatment-systems.png" title="Водоочистительные системы" />
			<Category href="#" image="/img/categories/shower-filter.png" title="ФИЛЬТР ДЛЯ ДУША" />
			<Category href="#" image="/img/categories/replacement-filters.png" title="СМЕННЫЕ фильтры" />
			<Category href="#" image="/img/categories/additional-spare-parts.png" title="Дополнительные запчасти" />
		</Container>
	)
}