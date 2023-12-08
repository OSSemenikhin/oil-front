import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { TNavLink } from 'features/types';
import styles from './NavListDesktop.module.css'

type TNavListDesktopProps = {
  color: 'black' | 'white';
  className?: string;
}

export default function NavListDesktop({ color, className}: TNavListDesktopProps) {
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

  const listRef = useRef<HTMLUListElement>(null);// }

  const renderLink = (href: string, title: string, className: string, active: boolean) => {
    return (
      <Link
        href={href}
        className={
          [
            'hover-brightness hover-underline active-opacity',
            active ? styles.active : '',
            className,
          ].join(' ').trim()
        }>
        {title}
      </Link>
    );
  }

  const renderListItem = (link: TNavLink, index: number) => {
    const stylesLink = [
      styles.link,
      styles[`link--${color}`],
      link.active ? styles.active : '',
      'hover-underline'
    ].join(' ').trim();

    if (link.subItems) return (
      <>
        {renderLink(link.href, link.title, stylesLink, !!link.active)}
        <div className={styles.subListWrapper}>
          <ul className={
            [
              'container mx-auto px-5 flex justify-center',
              styles.subList,
            ].join(' ').trim()
          }>
            {link.subItems.map((subLink, subLinkIndex) => (
              <li key={`${index}_${subLinkIndex}_subLink`} className={styles.subItem}>
                {renderLink(subLink.href, subLink.title, styles.subLink, !!subLink.active)}
              </li>
            ))}
          </ul>
        </div>
      </>
    );

    return renderLink(link.href, link.title, stylesLink, !!link.active);
  }

  return (
    <nav className={[className, styles.nav].join(' ').trim()}>
      <ul ref={listRef} className={styles.navList}>
        {
          list.map((link, index) => (
            <li
              key={`${index}_nav`}
              className={styles.navItem}
            >
              {renderListItem(link, index)}
            </li>
          ))
        }
      </ul>
    </nav>
  );
};
