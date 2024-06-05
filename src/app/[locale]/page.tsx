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

export const metadata: Metadata = {
  title: 'Главная - WaterPro'
}

export default async function Home({ params }: { params: { locale: string } }) {
  try {
    const [lang] = await wordpress.getTranslations('home')
    const translations =
      JSON.parse(typeof lang.acf[params.locale] === 'string' ? lang.acf[params.locale]!.toString() : '')

    return (
      <div className={styles.page}>
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