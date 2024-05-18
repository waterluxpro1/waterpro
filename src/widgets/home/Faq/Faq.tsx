import { Container } from '@/shared/ui/Container'
import styles from './Faq.module.scss'
import { Title2 } from '@/shared/ui/Title2'
import { Spoiler } from '@/shared/ui/Spoiler/Spoiler'
import { SpoilerTitle } from '@/shared/ui/SpoilerTitle/SpoilerTitle'
import { SpoilerBody } from '@/shared/ui/SpoilerBody/SpoilerBody'
import { Body1 } from '@/shared/ui/Body1'

export const Faq = ({ locale }: {
	locale?: {
		title: string
		questions: {
			question: string
			answer: string
		}[]
	}
}) => {
	return (
		<>{locale && locale.questions &&
			<Container>
				<Title2 className={styles.title}>{locale?.title}</Title2>
				<div className={styles.spoilers}>
					{locale.questions.map((question) =>
						<Spoiler key={JSON.stringify(question)}>
							<SpoilerTitle>{question.question}</SpoilerTitle>
							<SpoilerBody><Body1>{question.answer}</Body1></SpoilerBody>
						</Spoiler>
					)}
				</div>
			</Container>
		}
		</>
	)
}