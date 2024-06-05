import { Container } from '@/shared/ui/Container'
import { OverflowImage } from '@/shared/ui/OverflowImage/OverflowImage'
import Image from 'next/image'
import styles from './page.module.scss'
import { Body1 } from '@/shared/ui/Body1'
import { Title3 } from '@/shared/ui/Title3/Title3'
import { Card } from '@/shared/ui/Card/Card'
import { Button } from '@/shared/ui/Button'
import { Contact } from '@/widgets/home/Contact/Contact'
import { Title1 } from '@/shared/ui/Title1/Title1'
import { wordpress } from '@/shared/api/wordpress.service'

export const generateMetadata = async ({ params }: { params: { locale: string } }) => {
	const translation = await wordpress.getTranslations('installments', params.locale)

	return {
		title: `${translation.h1} - Water PRO`
	}
}

const Installments = async ({ params }: { params: { locale: string } }) => {
	const translation: {
		h1: string
		additional: {
			title: string
			description: string
		}
		variants: {
			title: string
			select_button: string
			cards: Array<{
				logo_path: string
				title: string
				description: string
			}>
		}
	} = await wordpress.getTranslations('installments', params.locale)

	return (
		<>
			<OverflowImage
				content={
					<div className={styles.content}>
						<Title1 className={styles.title}>{translation.h1}</Title1>
						<ul className={styles.logos}>
							<li>
								<svg width="128" height="64" viewBox="0 0 128 64" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_257_1112)">
										<path d="M56.7369 17.3964C57.3123 15.938 57.4561 14.6255 57.0246 13.1672C56.5931 11.4172 56.1615 10.8339 55.2985 9.37554C54.0039 7.18804 51.5586 6.75054 50.1201 9.08388C48.9694 10.8339 49.4009 14.9172 50.264 16.6672C51.4147 19.438 56.3054 18.563 56.7369 17.3964Z" fill="#335577" />
										<path d="M105.501 20.4584C105.501 19.1459 105.357 17.9792 104.494 16.9584C103.631 15.6459 103.2 15.3542 102.049 14.3334C100.323 13.0209 98.1652 13.3125 97.5898 15.6459C97.1583 17.3959 98.5967 20.6042 99.8913 21.7709C101.617 23.8125 105.501 21.625 105.501 20.4584Z" fill="#335577" />
										<path d="M63.7855 24.9795C70.2585 30.0836 69.9708 21.042 65.3678 17.6878C61.9156 15.0628 60.9087 22.792 63.7855 24.9795Z" fill="#335577" />
										<path d="M18.0436 39.7086C21.2082 46.8544 27.5372 52.2502 35.7362 51.8127C41.9215 51.5211 48.2505 47.2919 51.2712 41.8961C51.1274 42.0419 53.4288 45.2502 53.5727 45.5419C55.155 47.8752 57.3126 49.7711 60.1894 49.7711C63.354 49.7711 64.3609 47.5836 66.2308 45.3961C66.8062 44.6669 67.6692 47.2919 67.9569 47.5836C68.6761 48.6044 69.683 49.6252 70.8338 50.2086C75.4367 52.6877 77.1628 48.0211 77.7382 44.5211C78.6013 39.2711 80.1835 34.7502 82.7727 30.0836C83.6357 31.2502 86.0811 33.0002 84.9303 34.4586C83.4919 36.5002 82.0535 38.3961 82.6288 41.0211C83.3481 45.2502 88.5264 53.4169 93.7047 50.6461C96.2939 49.3336 97.7323 46.2711 97.3008 43.5002C97.1569 42.0419 96.5816 40.7294 96.0062 39.5627C95.5747 38.8336 94.2801 37.5211 94.7116 36.5002C95.287 34.8961 97.7323 34.3127 99.1707 34.4586C101.041 34.4586 101.904 35.4794 102.479 37.2294C103.486 40.7294 103.774 44.5211 105.931 47.5836C109.24 52.3961 113.123 49.0419 115.425 45.1044C116.719 42.7711 117.726 40.0002 117.583 37.3752C117.439 36.0627 116.863 35.9169 115.856 36.5002C114.13 37.6669 110.966 41.3127 108.664 39.1252C106.651 37.0836 108.233 33.5836 107.801 31.3961C107.226 28.1877 104.205 26.8752 101.185 26.8752C98.1638 27.0211 95.8623 28.9169 93.2732 30.0836C91.1155 31.1044 88.0949 30.6669 87.3756 27.7502C87.088 26.5836 87.951 25.2711 88.5264 24.1044C89.1018 22.9377 89.3894 21.7711 89.2456 20.3127C89.2456 17.5419 86.6564 16.2294 84.2111 17.1044C81.3343 17.9794 80.4712 21.0419 80.7589 23.6669C80.9027 25.1252 81.7658 26.4377 81.4781 27.8961C81.0466 29.7919 80.4712 31.5419 79.6082 33.2919C78.1697 36.3544 71.4091 47.0002 69.9707 38.6877C69.5392 35.7711 69.8269 32.7086 66.8062 31.1044C63.9293 29.5002 63.2101 31.2502 62.9224 33.8752C62.6348 36.6461 61.0525 39.7086 58.751 41.4586C55.4426 44.2294 55.8742 36.9377 55.8742 35.1877C55.8742 33.2919 55.8742 31.3961 56.3057 29.5002C56.5934 28.1877 57.4564 26.4377 56.5934 25.1252C56.018 24.2502 50.552 21.4794 50.2643 23.8127C49.8328 27.0211 49.1136 29.7919 47.9628 33.1461C44.2229 43.7919 33.8663 49.4794 27.1057 44.6669C23.6535 42.1877 23.0781 38.6877 22.9343 36.2086C25.5234 36.0627 28.8318 35.0419 30.5579 34.4586C36.5993 32.2711 41.9215 27.4586 44.5106 21.4794C46.8121 16.0836 46.9559 9.37525 43.0722 4.41691C38.4692 -0.249755 31.2771 -1.41642 26.2426 2.37525C17.1806 9.22941 15.4545 20.3127 16.0298 30.0836C12.2899 30.2294 8.40619 28.0419 5.3855 26.0002C4.23476 25.2711 2.50865 22.9377 1.07023 22.7919C-0.080512 22.7919 0.782542 25.2711 1.21407 26.0002C3.22786 29.0627 6.24855 31.8336 9.26924 33.5836C11.4269 34.7502 13.4407 35.7711 16.749 36.6461C17.3244 37.9586 17.4683 38.5419 18.0436 39.7086ZM88.6702 38.2502C90.2525 37.2294 91.2594 41.0211 88.2387 41.1669C84.6426 41.4586 87.088 39.2711 88.6702 38.2502ZM21.6397 29.0627C21.9274 23.2294 23.3658 17.8336 26.0988 12.8752C27.5372 10.2502 31.8525 3.54191 35.7362 6.45858C40.483 9.95858 38.0377 18.1252 35.4486 21.9169C32.7155 25.8544 26.6742 29.5002 21.6397 30.0836C21.6397 29.7919 21.6397 29.5002 21.6397 29.0627Z" fill="#335577" />
										<path d="M113.988 58.9585C96.1511 56.4794 85.0752 55.3127 64.5058 55.1669C53.1422 55.021 39.9087 55.6044 27.3944 56.4794C24.0861 56.6252 13.5856 57.646 13.154 57.646C11.2841 57.7919 10.1333 58.521 9.84566 59.8335C9.41414 61.146 9.98951 62.896 12.0033 63.4794C14.3048 64.0627 15.887 63.3335 17.9008 63.0419C19.7708 62.7502 23.3668 62.1669 44.3678 59.6877C83.7806 54.8752 124.632 62.3127 127.509 61.8752C130.529 61.146 119.022 59.6877 113.988 58.9585Z" fill="#335577" />
									</g>
									<defs>
										<clipPath id="clip0_257_1112">
											<rect width="128" height="64" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</li>
							<li>
								<svg width="378" height="50" viewBox="0 0 378 50" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_257_1119)">
										<path d="M147.354 26.305V44.5744H139.881L139.753 27.264C139.688 20.63 137.242 19.1213 133.979 19.1213C130.38 19.1213 126.917 21.3822 126.847 27.6773V44.5744H119.365L119.234 27.264C119.168 20.63 116.723 19.1213 113.325 19.1213C109.791 19.1213 106.397 21.3822 106.348 27.6773L106.213 44.5744H98.7148V13.4462H105.371V18.4393C107.206 14.6077 110.805 12.4873 115.766 12.4873C120.318 12.4873 124.052 13.9216 125.616 18.9849C127.38 14.8144 131.324 12.4873 136.552 12.4873C142.733 12.4873 147.354 15.1533 147.354 26.305Z" fill="#335577" />
										<path d="M154.898 29.1116C154.898 18.9849 162.101 12.4873 171.609 12.4873C181.118 12.4873 188.32 18.9849 188.32 29.1116C188.32 39.168 181.257 45.5333 171.609 45.5333C161.961 45.5333 154.898 39.168 154.898 29.1116ZM180.576 28.9752C180.511 23.4324 176.907 19.5346 171.609 19.5346C166.381 19.5346 162.778 23.5026 162.642 28.9752C162.507 34.5841 166.381 38.4818 171.609 38.4818C176.907 38.5066 180.712 34.5841 180.576 28.9752Z" fill="#335577" />
										<path d="M223.063 26.305V44.5744H215.676L215.541 27.264C215.471 20.63 213.079 19.1916 209.627 19.1916C205.823 19.1916 202.495 21.4484 202.429 27.5368L202.294 44.5744H194.816V13.4462H201.473V18.4393C203.307 14.678 206.976 12.4873 212.003 12.4873C218.524 12.4873 223.063 15.1533 223.063 26.305Z" fill="#335577" />
										<path d="M250.596 43.0001C248.626 44.5087 245.433 45.5338 241.629 45.5338C234.972 45.5338 232.05 42.0453 232.05 33.357V19.7377H228.246V13.4467H232.05V2.13379H239.523V13.3765H248.421V19.6013L239.523 19.6715V32.8073C239.523 37.1183 240.755 38.8957 243.664 38.8957C245.571 38.9057 247.412 38.1981 248.827 36.9117L250.596 43.0001Z" fill="#335577" />
										<path d="M253.922 29.1116C253.922 18.9849 261.124 12.4873 270.633 12.4873C280.141 12.4873 287.344 18.9849 287.344 29.1116C287.344 39.168 280.281 45.5333 270.633 45.5333C260.985 45.5333 253.922 39.168 253.922 29.1116ZM279.6 28.9752C279.53 23.4324 275.931 19.5346 270.633 19.5346C265.4 19.5346 261.801 23.5026 261.666 28.9752C261.53 34.5841 265.4 38.4818 270.633 38.4818C275.931 38.5066 279.735 34.5841 279.6 28.9752Z" fill="#335577" />
										<path d="M322.099 26.305V44.5744H314.712L314.577 27.264C314.511 20.63 312.114 19.1916 308.667 19.1916C304.863 19.1916 301.535 21.4484 301.469 27.5368L301.333 44.5744H293.84V13.4462H300.496V18.4393C302.331 14.678 306 12.4873 311.027 12.4873C317.548 12.4873 322.099 15.1533 322.099 26.305Z" fill="#335577" />
										<path d="M329.926 4.58033C329.92 3.68147 330.179 2.80108 330.67 2.05043C331.161 1.29977 331.862 0.71253 332.684 0.362905C333.506 0.0132798 334.413 -0.083039 335.29 0.0861207C336.166 0.25528 336.973 0.682327 337.609 1.3133C338.244 1.94427 338.68 2.75085 338.861 3.63112C339.041 4.51139 338.959 5.42585 338.624 6.25895C338.289 7.09204 337.716 7.80639 336.978 8.31172C336.24 8.81705 335.369 9.09069 334.477 9.09807C333.284 9.08974 332.141 8.61314 331.291 7.76954C330.441 6.92595 329.951 5.78184 329.926 4.58033Z" fill="#335577" />
										<path d="M330.469 13.4424H338.077L337.942 44.5746H330.469V13.4424Z" fill="#335577" />
										<path d="M344.355 29.1116C344.355 18.9849 351.554 12.4873 361.066 12.4873C370.579 12.4873 377.777 18.9849 377.777 29.1116C377.777 39.168 370.71 45.5333 361.066 45.5333C351.422 45.5333 344.355 39.168 344.355 29.1116ZM370.033 28.9752C369.964 23.4324 366.364 19.5346 361.066 19.5346C355.834 19.5346 352.235 23.5026 352.099 28.9752C351.964 34.5841 355.834 38.4818 361.066 38.4818C366.364 38.5066 370.169 34.5841 370.033 28.9752Z" fill="#335577" />
										<path d="M77.5775 30.3389L62.3932 15.0662C61.5757 14.242 60.6049 13.5881 59.5364 13.142C58.4678 12.6959 57.3224 12.4663 56.1656 12.4663C55.0089 12.4663 53.8635 12.6959 52.795 13.142C51.7264 13.5881 50.7556 14.242 49.9381 15.0662L45.153 19.9064L37.9794 12.6854C37.8153 12.498 37.647 12.3162 37.4747 12.1398C36.2773 10.9322 34.8552 9.97427 33.2898 9.32103C31.7243 8.6678 30.0463 8.33205 28.3518 8.33302H28.319C26.6237 8.3306 24.9446 8.66567 23.3783 9.31898C21.8119 9.97228 20.3893 10.9309 19.192 12.1398C19.0155 12.3176 18.8473 12.4994 18.6831 12.6854L4.00774 27.4662C2.79466 28.6705 1.83017 30.1046 1.16984 31.686C0.509508 33.2674 0.166387 34.9647 0.16024 36.6803C0.154094 38.3958 0.485044 40.0956 1.13403 41.6817C1.78301 43.2678 2.7372 44.709 3.94161 45.922C5.14603 47.1351 6.57686 48.0961 8.15168 48.7498C9.7265 49.4034 11.4142 49.7367 13.1175 49.7306C14.8208 49.7244 16.506 49.3788 18.0761 48.7137C19.6462 48.0486 21.0701 47.0772 22.2658 45.8554L28.3354 39.7464L34.405 45.8596C36.3782 47.8615 38.9445 49.1625 41.7164 49.5664C44.4884 49.9703 47.3155 49.4551 49.7712 48.0985C52.2269 46.7419 54.1777 44.6176 55.3294 42.0462C56.481 39.4748 56.771 36.5959 56.1554 33.844L65.1387 42.8918C66.799 44.5164 69.0273 45.4177 71.342 45.4009C73.6567 45.384 75.8719 44.4504 77.5087 42.8019C79.1455 41.1533 80.0724 38.9222 80.0891 36.5909C80.1059 34.2595 79.211 32.0152 77.598 30.343L77.5775 30.3389ZM49.7616 42.9332C48.9441 43.7574 47.9733 44.4112 46.9047 44.8573C45.8361 45.3035 44.6907 45.5331 43.534 45.5331C42.3773 45.5331 41.2319 45.3035 40.1633 44.8573C39.0947 44.4112 38.1239 43.7574 37.3064 42.9332L31.2368 36.82L28.3354 33.8977L25.434 36.82L19.3644 42.9332C17.7127 44.5967 15.4726 45.5312 13.1368 45.5312C10.801 45.5312 8.56082 44.5967 6.90916 42.9332C5.2575 41.2696 4.32961 39.0134 4.32961 36.6608C4.32961 35.4959 4.55741 34.3425 5.00001 33.2663C5.44261 32.19 6.09134 31.2122 6.90916 30.3885L21.5845 15.6077L21.6666 15.525L21.7446 15.4382C21.8718 15.2936 21.9826 15.1737 22.0934 15.0621C22.9093 14.2365 23.8796 13.582 24.9482 13.1364C26.0167 12.6909 27.1624 12.4631 28.319 12.4664H28.3518C29.5093 12.4631 30.6559 12.6913 31.7253 13.1375C32.7946 13.5838 33.7654 14.2394 34.5814 15.0662C34.6881 15.1737 34.7989 15.2936 34.9262 15.4341L35.0041 15.525L35.0862 15.6077L49.7616 30.3885C50.5799 31.2119 51.2291 32.1897 51.6721 33.2659C52.115 34.3422 52.343 35.4958 52.343 36.6608C52.343 37.8259 52.115 38.9795 51.6721 40.0557C51.2291 41.132 50.5799 42.1098 49.7616 42.9332Z" fill="#335577" />
									</g>
									<defs>
										<clipPath id="clip0_257_1119">
											<rect width="378" height="50" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</li>
						</ul>
					</div>
				}
				image={<Image className={styles.image} src="/img/drops.png" alt="" width={1000} height={480} />}
			/>
			<Container>
				<Title3 className={styles.subtitle} variant="highlighted">{translation.additional.title}</Title3>
				<Body1 className={styles.description}>
					{translation.additional.description}
				</Body1>

				<Title3 className={styles.subtitle} variant="highlighted">{translation.variants.title}</Title3>

				<div className={styles.variants}>
					{translation.variants.cards.map((card) =>
						<Card className={styles.card} key={JSON.stringify(card)}>
							<Image className={styles.logo} src={card.logo_path} alt={card.logo_path} width={400} height={90} />
							<span className={styles.cardTitle}>{card.title}</span>
							<Body1 className={styles.body} dangerouslySetInnerHTML={{ __html: card.description }}></Body1>
							<Button className={styles.button} appearance="primary">{translation.variants.select_button}</Button>
						</Card>
					)}
				</div>
			</Container>
			<div className={styles.contact}>
				<Contact />
			</div>
		</>
	)
}

export default Installments
