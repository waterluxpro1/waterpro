import { Advantages } from '@/widgets/home/Advantages'
import { Categories } from '@/widgets/home/Categories'
import { Contact } from '@/widgets/home/Contact/Contact'
import { Faq } from '@/widgets/home/Faq/Faq'
import { PopularGoods } from '@/widgets/home/PopularGoods/PopularGoods'
import { Reviews } from '@/widgets/home/Reviews/Reviews'
import { Welcome } from '@/widgets/home/Welcome'
import styles from './page.module.scss'

export default async function Home({ params }: { params: { locale: string } }) {
  const lang = await import(`@/shared/locales/${params.locale}/home.json`)

  return (
    <div className={styles.page}>
      <Welcome locale={lang.welcome} />
      <Categories {...lang.categories} />
      <Advantages locale={lang.advantages} />
      <PopularGoods locale={lang.popular_goods} lang={params.locale} />
      <Contact />
      <Reviews locale={lang.reviews} />
      <Faq locale={lang.faq} />
    </div>
  )
}