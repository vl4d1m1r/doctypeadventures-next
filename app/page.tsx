import Posts from '@/components/Posts';
import Landing from '@/components/Landing';
import styles from './page.module.css'

const Home = () => {
  return (
    <>
      <Landing />
      <Posts postsEndpoint={"posts?_embed=&per_page=6&page=1&page=1&categories=4"} />
    </>

  )
}

export default Home