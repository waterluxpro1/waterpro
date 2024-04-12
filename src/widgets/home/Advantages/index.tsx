import { Container } from '@/shared/ui/Container'
import styles from './Advantages.module.scss'
import { Title2 } from '@/shared/ui/Title2'
import { Body1 } from '@/shared/ui/Body1'
import { Advantage } from './Advantage'
import { Title4 } from '@/shared/ui/Title4'
import { Body2 } from '@/shared/ui/Body2'

export const Advantages = () => {
	return (
		<Container>
			<Title2 className={styles.title}>Наши преимущества</Title2>
			<div className={styles.description}>
				<Body1>
					Мы - компания, специализирующаяся на продаже высококачественных систем очистки воды от ведущего производителя PurePro Water Corporation. Уже более 20 лет PurePro является мировым лидером в производстве и
				</Body1>
				<Body1>
					Наша миссия — обеспечить высочайшее качество обслуживания и продуктов в водоочистительной системе. Поэтому благодаря нашим обязательствам наши клиенты могут быть уверены, что их будущие требования к фильтрам будут удовлетворены самыми современными решениями
				</Body1>
			</div>
			<div className={styles.cards}>
				<Advantage
					icon="/img/advantage-icons/correspondence.png"
					title="Своевременное обслуживание"
					description="Мы ежегодно напоминаем о необходимости обслуживания вашей системы. Это гарантирует ее бесперебойную работу и качественную очищенную воду для вас." />
				<Advantage
					icon="/img/advantage-icons/checked-hand.png"
					title="Забота об окружающей среде"
					description="Каждая установленная система помогает сократить количество отходов и защищает окружающую среду от негативного воздействия пластиковой продукции." />
				<Advantage
					icon="/img/advantage-icons/water-quality.png"
					title="Качество воды"
					description="Наша система обеспечивает чистую и безопасную воду, которой вы можете доверять." />
				<Advantage
					icon="/img/advantage-icons/affordability.png"
					title="Ценовая доступность"
					description="Несмотря на высокое качество нашей продукции и обслуживания, мы предлагаем конкурентоспособные цены, делая наши продукты доступными для широкого круга потребителей." />
				<Advantage
					icon="/img/advantage-icons/individuality.png"
					title="Индивидуальность"
					description="Мы предлагаем вам возможность выбора комплектации к системе очистки воды в соответствии с вашими  предпочтениями" />
				<Advantage
					icon="/img/advantage-icons/calendar-coin.png"
					title="Долговечность эксплуатации"
					description="Фильтры изготавливаются из высококачественных материалов, что гарантирует надёжность долгосрочной эксплуатации; картриджи, сменные элементы и фильтрующие материалы от ведущего производителя, что гарантирует эффективную очистку воды" />
			</div>

			<div className={styles.blocks}>
				<div className={styles.block}>
					<Title4 className={styles.subtitle}>международная доставка</Title4>
					<Body2>
						Доставка товара осуществляется Omniva (Eesti Post) и Itella SmartPost с помощью посылочного автомата, Omniva почтовое отделение. Товар поступит на выбранный вами посылочный терминал в течение 1-5 рабочих дней после получения подтверждения заказа
					</Body2>
				</div>
				<div className={styles.block}>
					<Title4 className={styles.subtitle}>Возможна рассрочка</Title4>
					<Body2>
						Платежи на более длительный срок. Возможна рассрочкаЖизнь полна сюрпризов. Для непредвиденных и крупных расходов разумным помощником станет рассрочка, с помощью которой вы сможете оплатить товар или услугу частями в течение более длительного периода
					</Body2>
				</div>
			</div>
		</Container>
	)
}