import { ReactNode } from 'react';
import { motion } from "framer-motion"
import Header from 'widgets/Header';
import Footer from 'widgets/Footer';
import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return(
    <>
      <Header />
        <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
