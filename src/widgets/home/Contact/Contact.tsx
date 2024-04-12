import { Container } from '@/shared/ui/Container'
import styles from './Contact.module.scss'
import { Title2 } from '@/shared/ui/Title2'
import { Input } from '@/shared/ui/Input/Input'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import Link from 'next/link'
import { Button } from '@/shared/ui/Button'

export const Contact = () => {
	return (
		<article className={styles.wrapper}>
			<Container>
				<Title2 className={styles.title}>
					Заполните форму и мы свяжемся с вами при первой возможности!
				</Title2>
				<form className={styles.form} action="">
					<div className={styles.block}>
						<Input name="name" placeholder="Имя*" required />
						<Input name="name" placeholder="Email*" required />
					</div>
					<div className={styles.block}>
						<Input name="name" placeholder="Телефон*" required />
						<Input name="name" placeholder="Адрес*" required />
					</div>
					<div className={styles.block}>
						<Textarea className={styles.textarea} placeholder="Задайте вопрос"></Textarea>
					</div>
					<div className={styles.checkboxWrapper}>
						<Checkbox id="form-agree"
							label={<>Даю согласие на <Link className={styles.link} href="#">обработку личных данных</Link></>} />
					</div>
					<Button className={styles.button} appearance="primary" size="large">Отправить</Button>
				</form>
			</Container>
		</article>
	)
}