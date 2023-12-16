import Layout from '../features/Layout';
import Hero from 'widgets/Hero';
import NewArrivals from 'widgets/NewArrivals';
import TopPicks from 'widgets/TopPicks';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TopPicks />
      <NewArrivals />
    </Layout>
  )
}
