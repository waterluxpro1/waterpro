'use client'

import { Container } from '@/shared/ui/Container'
import styles from './Advantages.module.scss'
import { Title2 } from '@/shared/ui/Title2'
import { Advantage } from './Advantage'
import { Title4 } from '@/shared/ui/Title4'
import { Body2 } from '@/shared/ui/Body2'
import { Body1 } from '@/shared/ui/Body1'
import type { AdvantagesProps } from './Advantages.props'

export const Advantages = ({ locale }: AdvantagesProps) => {
	return (
		<Container>
			<Title2 className={styles.title}>{locale?.title}</Title2>
			<div className={styles.description}>
				{locale?.description.split('\n').map((item) => <Body1 key={item}>
					{item}
				</Body1>)}
			</div>
			<div className={styles.cards}>
				{locale?.cards.map((card) =>
					<Advantage
						key={card.icon_url}
						icon={card.icon_url}
						title={card.title}
						description={card.description} />
				)}
			</div>

			{locale?.blocks &&
				<div className={styles.blocks}>
					{locale?.blocks.map((block) =>
						<div className={styles.block} key={JSON.stringify(block)}>
							<Title4 className={styles.subtitle}>{block.title}</Title4>
							<Body2>{block.description}</Body2>
						</div>
					)}
				</div>}

		</Container >
	)
}