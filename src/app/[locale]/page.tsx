import { Welcome } from '@/widgets/home/Welcome'
import { Categories } from '@/widgets/home/Categories'
import { Advantages } from '@/widgets/home/Advantages'
import { PopularGoods } from '@/widgets/home/PopularGoods/PopularGoods'
import { Contact } from '@/widgets/home/Contact/Contact'
import { Reviews } from '@/widgets/home/Reviews/Reviews'
import { Faq } from '@/widgets/home/Faq/Faq'
import styles from './page.module.scss'
import type { Metadata } from 'next'
import { Container } from '@/shared/ui/Container'
import { wordpress } from '@/shared/api/wordpress.service'
import { headers } from 'next/headers'

export const generateMetadata = async ({ params }: { params: { locale: string } }): Promise<Metadata> => {
  const translations = await wordpress.getTranslations('home', params.locale)

  return {
    title: `${translations.welcome.title.replace('<br>', '')} | Water PRO`,
    openGraph: {
      url: headers().get('referer') ? headers().get('referer')! : 'https://www.waterpro.ee'
    }
  }
}

export default async function Home({ params }: { params: { locale: string } }) {
  try {
    const translations = await wordpress.getTranslations('home', params.locale)

    return (
      <div className={styles.page}>
        {process.env.SMARTPOST_API_KEY}
        <Welcome locale={translations.welcome} />
        <Categories {...translations.categories} />
        <Advantages locale={translations.advantages} />
        <PopularGoods locale={translations.popular_goods} lang={params.locale} />
        <Contact />
        <Reviews locale={translations.reviews} />
        <Faq locale={translations.faq} />
      </div>
    )
  }
  catch (e) {
    console.error(e)
    return (
      <Container>Перевод не найден. Ошибка в консоли</Container>
    )
  }
}