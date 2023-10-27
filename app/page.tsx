import Categories from '@/components/Categories'
import Tags from '@/components/Tags'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Categories />
      <br></br>
      <Tags />
    </main>
  )
}
