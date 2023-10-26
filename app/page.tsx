import Categories from '@/components/Categories'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Categories />
    </main>
  )
}
