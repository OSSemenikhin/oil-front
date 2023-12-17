import Layout from '../features/Layout';
import Hero from 'widgets/Hero';
import NewArrivals from 'widgets/NewArrivals';
import TopPicks from 'widgets/TopPicks';
import NewsList from 'widgets/NewsList';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TopPicks />
      <NewArrivals />
      <NewsList />
    </Layout>
  )
}
