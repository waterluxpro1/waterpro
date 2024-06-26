'use server'

export const sendGiftCardRequest = async (prevState: { ok: boolean, message: string }, formData: FormData): Promise<{ ok: boolean, message: string }> => {
	const name = formData.get('name')
	const tel = formData.get('tel')
	const email = formData.get('email')

	const response = await fetch(`${process.env.SEND_EMAIL_FUNCTION}?to=${process.env.SEND_EMAIL_TO}&topic=Заявка+на+подарочную+карту+|+WaterPRO&mail=Заявка на подарочную карту через сайт https://www.waterpro.ee/\\nИмя: ${name}\\nТелефон: ${tel}\\nПочта: ${email}`)

	if (response.ok) {
		return { ok: true, message: 'Форма отправлена успешно' }
	}

	return { ok: false, message: await response.text() }
}