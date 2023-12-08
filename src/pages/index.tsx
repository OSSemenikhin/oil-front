import Header from 'widgets/Header';
import Footer from 'widgets/Footer';
import Hero from 'widgets/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Footer />
      </main>
    </>
  )
}
