import { ReactNode } from 'react';
import Head from 'next/head'
import Breadcrumbs from '../../shared/Breadcrumbs';
import Header from 'widgets/Header';
import Footer from 'widgets/Footer';
import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
  banner?: boolean;
}

export default function Layout({ children, banner }: LayoutProps) {
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
