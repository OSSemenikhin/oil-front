import Image from 'next/image';
import Link from 'next/link';
import Header from 'widgets/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between p-24">
        <h1>INDEX</h1>
      </main>
    </>
  )
}
