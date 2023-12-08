import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'assets/logo-red.svg';
import NavListDesktop from 'features/NavListDesktop';
import { TNavLink } from 'features/types';
import Actions from 'features/Actions';
import TopBar from '../../features/TopBar';
import BurgerMenu from 'widgets/BurgerMenu';
import CBurger from 'components/CBurger';
import styles from './Header.module.css';

const list: TNavLink[] = [
  {
    title: 'Пункт_1 Масла',
    href: '#',
    active: true,
    subItems: [
      {
        title: 'Подпункт_1',
        href: '#',
        active: true,
      },
      {
        title: 'Подпункт_2',
        href: '#',
      },
      {
        title: 'Подпункт_3',
        href: '#',
      },
      {
        title: 'Подпункт_4',
        href: '#',
      }
    ],
  },
  {
    title: 'Автомобили Пункт_2',
    href: '#',
    subItems: [
      {
        title: 'Подпункт_1',
        href: '#',
      },
      {
        title: 'Подпункт_2',
        href: '#',
      },
      {
        title: 'Подпункт_3',
        href: '#',
      }
    ],
  },
  {
    title: 'Мотоциклы Пункт_3',
    href: '#',
    subItems: [
      {
        title: 'Подпункт_1',
        href: '#',
      },
      {
        title: 'Подпункт_2',
        href: '#',
      },
    ],
  },
  {
    title: 'Техника Пункт_4',
    href: '#',
  },
];

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

  const onMenuOutsideClick = (event: MouseEvent) => { }


  return (
    <header className={styles.header}>
      <TopBar onMount={(height: number) => setTopBarHeight(height)} />
      <div className={styles.fixed} style={{ top: `${topBarHight - Math.min(scrollPosition, topBarHight)}px` }}>
        <div
          className={styles.background}
          style={{ height: `${containerHeight - Math.min(scrollPosition, containerHeight)}px` }}
        >
          <div ref={containerRef} className="container flex justify-between items-center mx-auto px-5 py-3">
            <NavListDesktop className={styles.navBarBlack} color='white'/>
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
          <NavListDesktop color='black'/>
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
