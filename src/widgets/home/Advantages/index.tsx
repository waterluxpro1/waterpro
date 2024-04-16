'use client'

import { Container } from '@/shared/ui/Container'
import styles from './Advantages.module.scss'
import { Title2 } from '@/shared/ui/Title2'
import { Advantage } from './Advantage'
import { Title4 } from '@/shared/ui/Title4'
import { Body2 } from '@/shared/ui/Body2'
import { useContext } from 'react'
import { HomePageContext } from '@/page/home/ui/HomePageProvider'
import { Body1 } from '@/shared/ui/Body1'

export const Advantages = () => {
	const { acf } = useContext(HomePageContext)

	return (
		<Container>
			<Title2 className={styles.title}>{acf.advantages_title}</Title2>
			<div className={styles.description}>
				{acf.advantages_description.split('\n').map((item) => <Body1 key={item}>
					{item}
				</Body1>)}
			</div>
			<div className={styles.cards}>
				{acf.advantage_cards.map((card) =>
					<Advantage
						key={card.icon}
						icon={card.icon}
						title={card.title}
						description={card.description} />
				)}
			</div>

			{acf.advantages_blocks &&
				<div className={styles.blocks}>
					{acf.advantages_blocks.map((block) =>
						<div className={styles.block} key={JSON.stringify(block)}>
							<Title4 className={styles.subtitle}>{block.title}</Title4>
							<Body2>{block.description}</Body2>
						</div>
					)}
				</div>
			}
		</Container>
	)
}