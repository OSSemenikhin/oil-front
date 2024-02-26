import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { TNavLink } from '@/shared/model/types';
import styles from './NavListDesktop.module.css'

type TNavListDesktopProps = {
  color: 'black' | 'white';
  className?: string;
}

export default function FakeNavListDesktop({ color, className}: TNavListDesktopProps) {
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

  return (
    <div className={[className, styles.nav].join(' ').trim()}>
      <ul className={styles.navList}>
        {
          list.map((link, index) => (
            <li
              key={`${index}_nav`}
              className={[
                styles.navItem,
                styles.link,
                styles[`link--${color}`],
              ].join(' ').trim()}
            >
              {link.title}
            </li>
          ))
        }
      </ul>
    </div>
  );
};
