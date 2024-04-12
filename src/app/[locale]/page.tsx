import { Advantages } from '@/widgets/home/Advantages'
import { Categories } from '@/widgets/home/Categories'
import { Contact } from '@/widgets/home/Contact/Contact'
import { Faq } from '@/widgets/home/Faq/Faq'
import { PopularGoods } from '@/widgets/home/PopularGoods/PopularGoods'
import { Reviews } from '@/widgets/home/Reviews/Reviews'
import { Welcome } from '@/widgets/home/Welcome'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.page}>
      <Welcome />
      <Categories />
      <Advantages />
      <PopularGoods />
      <Contact />
      <Reviews />
      <Faq />
    </div>
  )
}
