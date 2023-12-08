import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { INavList } from 'widgets/Header/types';
import RegionList from 'features/RegionList';
import Actions from 'features/Actions';
import styles from './TopBar.module.css';

type ITopBarProps = {
  onMount: (hight: number) => void;
}

export default function TopBar({ onMount }: ITopBarProps) {
  const list: INavList = [
    {
      title: 'O нас',
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
      title: 'Доставка',
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
  ];
  const topBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topBarRef.current) {
      onMount(topBarRef.current.clientHeight);
    }
  }, [onMount]);

  return (
    <div ref={topBarRef} className={styles.bar}>
      <div className='container mx-auto px-5 flex justify-between items-center'>
        <RegionList classNameWrapper={
          [
            styles.region,
            'hover-brightness'
          ].join(' ').trim()
        } />
        <div className='flex'>
          <ul className='flex items-center gap-x-5 px-5'>
            {
              list.map((link, index) => (
                <li key={`${index}_link`}>
                  <Link
                    className={[styles.link, 'hover-brightness'].join(' ').trim()}
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))
            }
          </ul>
          <Actions
            classNameWrapper={styles.actions}
            classNameCartIcon={styles.cart}
            classNamePhoneIcon={styles.phone}
            classNameSearchIcon={styles.search}
          />
        </div>
      </div>
    </div>

  )
}
