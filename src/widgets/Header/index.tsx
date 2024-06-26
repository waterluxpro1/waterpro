import { wordpress } from '@/shared/api/wordpress.service'
import { HeaderWrapper } from './HeaderWrapper/HeaderWrapper'

export const Header = async ({ lang, goods }: { lang: string, goods: number }) => {

	const translations = await wordpress.getTranslations('header', lang)
	const menuTranslations = await wordpress.getTranslations('menu', lang)

	return (
		<HeaderWrapper lang={lang} goods={goods} translations={translations} menuTranslatons={menuTranslations} />
	)
}