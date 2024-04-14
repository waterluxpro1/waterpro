import { Advantages } from '@/widgets/home/Advantages'
import { Categories } from '@/widgets/home/Categories'
import { Contact } from '@/widgets/home/Contact/Contact'
import { Faq } from '@/widgets/home/Faq/Faq'
import { PopularGoods } from '@/widgets/home/PopularGoods/PopularGoods'
import { Reviews } from '@/widgets/home/Reviews/Reviews'
import { Welcome } from '@/widgets/home/Welcome'
import styles from './page.module.scss'
import { wordpress } from '@/shared/api/wordpress.service'

export default async function Home({ params }: { params: { locale: string } }) {
  const [page] = await wordpress.getPage<{
    acf: {
      categories: {
        name: string
        url: string
        image: number
      }[]
    }
  }[]>('home', params.locale)

  return (
    <div className={styles.page}>
      <Welcome />
      <Categories categories={page.acf.categories} />
      <Advantages />
      <PopularGoods />
      <Contact />
      <Reviews />
      <Faq />
    </div>
  )
}
