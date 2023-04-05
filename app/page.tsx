import Posts from '@/components/Posts';
import styles from './page.module.css'

const Home = () => {
  return (
    <Posts postsEndpoint={"posts?_embed=&per_page=6&page=1&page=1&categories=4"} />
  )
}

export default Home
