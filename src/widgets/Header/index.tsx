import { useState, useEffect, useRef, } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/assets/logo-red.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '@/app/Store/model/topBarMenuSlice';
import { RootState } from '@/app/Store/';
import NavListDesktop from '@/features/NavListDesktop';
import FakeNavListDesktop from '@/features/NavListDesktop/FakeNavListDesktop';
import Actions from '@/features/Actions';
import TopBar from '@/widgets/Header/ui/TopBar';
import BurgerMenu from '@/widgets/Header/ui/BurgerMenu';
import Burger from '@/widgets/Header/ui/Burger';
import styles from './Header.module.css';

export default function Header() {
  const height = useSelector((state: RootState) => state.heroHeight.height);

  const [backgroundIsActive, setBackgroundIsActive] = useState(true);
  const [isTopBarMounted, setTopBarMounted] = useState(false);
  const [topBarHeight, setTopBarHeight] = useState<number>(0);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // const dispatch = useDispatch();
  // (() => {
  //   dispatch(getList());
  // })();

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

  useEffect(() => {
    const handleScroll = () => {
      if (isTopBarMounted && containerRef.current) {
        const newTopBarHeight = topBarHeight || 0;
        // const newContainerHeight = containerRef.current.getBoundingClientRect().height;
        const marginTop = newTopBarHeight + height;

        if (window.scrollY > marginTop) {
          setBackgroundIsActive(false);
        } else {
          setBackgroundIsActive(true);
        }
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isTopBarMounted, topBarHeight, height]);

  const onOpenMenuCallback = () => {
    if (scrollPosition < containerHeight / 2) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (scrollPosition >= containerHeight / 2 && scrollPosition < containerHeight) {
      window.scrollTo({ top: containerHeight, behavior: 'auto' });
    }
  }

  const onMenuOutsideClick = (event: MouseEvent) => { }

  return (
    <>
      <TopBar onMount={(height: number) => {
        setTopBarHeight(height);
        setTopBarMounted(true);
      }} />

      {isTopBarMounted && (
        <header className={styles.header}>
          <div
            className={[styles.background, backgroundIsActive ? null : styles.backgroundHidden].join(' ').trim()}
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
              <Burger
                onButtonClick={() => setMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)}
                isMenuOpen={isMenuOpen}
                onOpenCallack={() => onOpenMenuCallback()}
              />
            </div>
          </div>
          <BurgerMenu
            ref={contentRef}
            headerHeight={containerHeight}
            isOpen={isMenuOpen}
            onNavigate={() => setMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)}
          />
        </header >
      )}
    </>
  )
};
