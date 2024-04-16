import { Advantages } from '@/widgets/home/Advantages'
import { Categories } from '@/widgets/home/Categories'
import { Contact } from '@/widgets/home/Contact/Contact'
import { Faq } from '@/widgets/home/Faq/Faq'
import { PopularGoods } from '@/widgets/home/PopularGoods/PopularGoods'
import { Reviews } from '@/widgets/home/Reviews/Reviews'
import { Welcome } from '@/widgets/home/Welcome'
import styles from './page.module.scss'
import { wordpress } from '@/shared/api/wordpress.service'
import type { HomePageModel } from '@/page/home/model/HomePage.model'
import { HomePageProvider } from '@/page/home/ui/HomePageProvider'

export default async function Home({ params }: { params: { locale: string } }) {
  const [page] = await wordpress.getPage<HomePageModel[]>('home', params.locale)

  return (
    <HomePageProvider value={page}>
      <div className={styles.page}>
        <Welcome />
        <Categories categories={page?.acf?.categories} />
        <Advantages />
        <PopularGoods lang={params.locale} />
        <Contact />
        <Reviews />
        <Faq />
      </div>
    </HomePageProvider>
  )
}
