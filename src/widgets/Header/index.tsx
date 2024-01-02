import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'assets/logo-red.svg';
import NavListDesktop from 'features/NavListDesktop';
import FakeNavListDesktop from 'features/NavListDesktop/FakeNavListDesktop';
import Actions from 'features/Actions';
import TopBar from '../../features/TopBar';
import BurgerMenu from 'widgets/BurgerMenu';
import CBurger from 'components/CBurger';
import styles from './Header.module.css';

export default function Header() {
  const [topBarHight, setTopBarHeight] = useState<number>(0);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const calculateHeight = () => {
    if (containerRef.current) {
      const height = containerRef.current.getBoundingClientRect().height;
      setContainerHeight(height);
    }
  };

  const closeModal = () => {
    if (window.innerWidth >= 1024) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    window.addEventListener('resize', closeModal);

    return () => {
      window.removeEventListener('resize', calculateHeight);
      window.removeEventListener('resize', closeModal);
    };
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    const startPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(startPos);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onOpenMenuCallback = () => {
    if (scrollPosition < containerHeight / 2) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (scrollPosition >= containerHeight / 2 && scrollPosition < containerHeight) {
      window.scrollTo({ top: containerHeight, behavior: 'auto' });
    }
  }

  const onMenuOutsideClick = (event: MouseEvent) => { }

  return (
    <header className={styles.header}>
      <TopBar onMount={(height: number) => setTopBarHeight(height)} />
      <div className={styles.fixed} style={topBarHight ? { top: `${topBarHight - Math.min(scrollPosition, topBarHight)}px` } : {}}>
        <div
          className={styles.background}
          style={containerHeight ? { height: `${containerHeight - Math.min(scrollPosition, containerHeight)}px` } : {}}
        >
          <div ref={containerRef} className="container flex justify-between items-center mx-auto px-5 py-3">
            <FakeNavListDesktop className={styles.navBarBlack} color='white' />
          </div>
        </div>
        <div ref={containerRef} className="container flex justify-between items-center mx-auto px-5 py-3">
          <Link className={styles.logo} href="/">
            <Image
              priority
              src={logo}
              alt="emka"
            />
          </Link>
          <NavListDesktop color='black' />
          <div className='flex gap-x-2'>
            <Actions
              classNameWrapper={styles.actions}
              classNameCartIcon={styles.cart}
              classNamePhoneIcon={styles.phone}
              classNameSearchIcon={styles.search}
            />
            <CBurger
              onButtonClick={() => setMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)}
              isMenuOpen={isMenuOpen}
              onOpenCallack={() => onOpenMenuCallback()}
            />
          </div>
        </div>
      </div>
      <BurgerMenu ref={contentRef} headerHeight={containerHeight} isOpen={isMenuOpen} />
    </header >
  )
}
