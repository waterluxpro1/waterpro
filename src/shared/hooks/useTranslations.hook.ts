import { useQuery } from './useQuery.hook'

export const useTranslations = (key: string, lang: string) => {
	const translationsAPI = useQuery<{ acf: Record<string, string> }[]>(`/api/translations?slug=${key}`)
	const translations = translationsAPI?.[0]?.acf[lang] ? JSON.parse(translationsAPI?.[0]?.acf[lang]) : {}

	return translations
}