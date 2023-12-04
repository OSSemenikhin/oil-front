import { useState, useEffect, useRef } from 'react';
import { Col, InputRef, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from 'antd';
import Burger from 'components/CBurger';
import logo from 'assets/logo.svg';
import { PhoneOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import styles from './Header.module.css';

export default function Header() {
  const [isSearchActive, setSearchActive] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const searchContainerRef = useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<InputRef>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (!event.target) return;
    const targetNode = event.target as Node;
    if (searchContainerRef.current && !searchContainerRef.current.contains(targetNode)) {
      setSearchActive(false);
    }
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };


  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      console.log('return');
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);;

  useEffect(() => {
    if (isSearchActive && searchInputRef.current) {
      setTimeout(() =>
        searchInputRef.current && searchInputRef.current.focus(),
        100
      );
    }
  }, [isSearchActive]);

  const handleSearchButton = () => {
    if (!isSearchActive) {
      setSearchActive(prevIsSearchActive => !prevIsSearchActive);
      return;
    }
  }

  return (
    <>
      <header className={styles.header}>
        <div
          className={styles['header-background']}
          style={{ height: `${61 - Math.min(scrollPosition, 61)}px` }} // Пример уменьшения высоты
        ></div>
        <div className="container flex justify-between items-center mx-auto px-5 py-3">
          <Link className={styles.logo} href="/">
            <Image
              priority
              src={logo}
              alt="emka"
            />
          </Link>
          <div className='flex justify-between items-center basis-20 sm:basis-2/6 lg:basis-3/12 xl:basis-2/12'>
            <div
              ref={searchContainerRef}
              className={
                [
                  'flex content-center',
                  styles.search,
                  isSearchActive ? styles.active : '',
                ].join(' ').trim()
              }
            >
              <Input
                ref={searchInputRef}
                className={
                  [
                    styles.search__input,
                    isSearchActive ? styles.active : '',
                  ].join(' ').trim()
                }
                placeholder="Поиск по сайту ..."
              />
              <button
                className={
                  [
                    'active-opacity',
                    styles.search__button,
                  ].join(' ').trim()
                }
                onClick={() => handleSearchButton()}
              >
                <SearchOutlined className={styles.search__icon} />
              </button>
            </div>
            <a className={
              [
                'active-opacity p-1',
                styles.phone,
              ].join(' ').trim()
            }
              href="tel:88005553535"
            >
              <PhoneOutlined />
            </a>
            <button className={styles.cart}>
              <ShoppingCartOutlined className={styles.cart__icon} />
            </button>
            <Burger />
          </div>
        </div>
      </header >
    </>
  )
}
