import { store } from "@/redux-store/store";
import { setCategories } from "@/redux-store/sliceCategories";
import { setTags } from "@/redux-store/sliceTags";
import Categories from '@/components/Categories'
import Tags from '@/components/Tags'
import styles from './page.module.css'

console.log('process.envX === ', process.env)

async function getCategories() {
  const res = await fetch(`${process.env.API_ENDPOINT}categories`);
  return res.json();
}

async function getTags() {
  const res = await fetch(`${process.env.API_ENDPOINT}tags?per_page=100`);
  return res.json();
}

export default async function Home() {
  const categoriesData = getCategories();
  const tagsData = getTags();

  const [categories, tags] = await Promise.all([categoriesData, tagsData]);

  store.dispatch(setCategories(categories))
  store.dispatch(setTags(tags))

  //console.log(categories, tags)
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Main APP!
      </div>
      <Categories />
      <Tags />
    </main>
  )
}
