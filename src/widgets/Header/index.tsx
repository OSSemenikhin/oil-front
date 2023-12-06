import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'assets/logo.svg';
import NavListDesktop from 'features/NavListDesktop';
import Actions from './Actions';
import BottomBar from './BottomBar';
import TopBar from './TopBar';
import BurgerMenu from 'widgets/BurgerMenu';
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

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
  }, [scrollPosition, containerHeight]);

  const onOpenMenuCallback = () => {
    if (scrollPosition < containerHeight / 2) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (scrollPosition >= containerHeight / 2 && scrollPosition < containerHeight) {
      window.scrollTo({ top: containerHeight, behavior: 'auto' });
    }
  }

  const onMenuOutsideClick = (event: MouseEvent) => {}


  return (
    <header className={styles.header}>
      <TopBar onMount={(height) => setTopBarHeight(height)} scrollPosition={scrollPosition} />
      <div className={styles.header__fixed} style={{top: `${topBarHight - Math.min(scrollPosition, topBarHight)}px`}}>
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
          <NavListDesktop />
          <Actions
            onBurgerClick={() => setMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)}
            onOpenMenuCallack={() => onOpenMenuCallback()}
            isMenuOpen={isMenuOpen}
          />
        </div>
      </div>
      {/* <BottomBar /> */}
      <BurgerMenu ref={contentRef} headerHeight={containerHeight} isOpen={isMenuOpen} />
    </header >
  )
}
