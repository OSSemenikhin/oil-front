import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'assets/logo.svg';
import Actions from './Actions';
import BottomBar from './BottomBar';
import BurgerMenu from './BurgerMenu';
import styles from './Header.module.css';

type INavItem = {
  title: string,
  href: string
}

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.getBoundingClientRect().height;
        setContainerHeight(height);
      }
    };
    calculateHeight();
    window.addEventListener('resize', calculateHeight);

    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onOpenMenuCallback = () => {
    console.log('burger menu opened');
  }

  const onMenuOutsideClick = (event: MouseEvent) => {}


  return (
    <header className={styles.header}>
      <div className={styles.header__fixed}>
        <div
          className={styles['header-background']}
          style={{ height: `${containerHeight - Math.min(scrollPosition, containerHeight)}px` }}
        ></div>
        <div ref={containerRef} className="container flex justify-between items-center mx-auto px-5 py-3">
          <Link className={styles.logo} href="/">
            <Image
              priority
              src={logo}
              alt="emka"
            />
          </Link>
          {/* <nav className={
            [
              styles.nav,
              styles['nav--desctop']
            ].join(' ').trim()
          }
          >
            <ul className={
              [
                'flex items-center',
                styles.nav__list,
              ].join(' ').trim()
            }>
            </ul>
          </nav> */}
          <Actions
            onBurgerClick={() => setMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)}
            onOpenMenuCallack={() => onOpenMenuCallback()}
            isMenuOpen={isMenuOpen}
          />
        </div>
      </div>
      <BottomBar />
      <BurgerMenu ref={contentRef} headerHeight={containerHeight} isOpen={isMenuOpen} />
    </header >
  )
}
