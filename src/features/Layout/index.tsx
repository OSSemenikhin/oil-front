import { ReactNode } from 'react';
import Head from 'next/head'
import Breadcrumbs from 'features/Breadcrumbs';
import Header from 'widgets/Header';
import Footer from 'widgets/Footer';
import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Emka</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <Breadcrumbs />
        {children}
      </main>
      <Footer />
    </>
  );
}
