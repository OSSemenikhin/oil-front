import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { INavList, INavLink } from 'widgets/Header/types';
import styles from './NavListDesktop.module.css'

type INavListDesktopProps = {
  scrollPosition: number;
}

export default function NavListDesktop({ scrollPosition, }: INavListDesktopProps) {
  const list: INavList = [
    {
      title: 'Пункт_1 Масла',
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
        {
          title: 'Подпункт_3',
          href: '#',
        },
        {
          title: 'Подпункт_4',
          href: '#',
        },
      ],
    },
    {
      title: 'Техника Пункт_4',
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

  const [lisnksColor, setLinksColor] = useState<'black' | 'white'>('black');
  const listRef = useRef<HTMLUListElement>(null);// }

  useEffect(() => {
    if (!listRef.current) return;
    const listHeight = listRef.current.getBoundingClientRect().height;
    switch (lisnksColor) {
      case 'black':
        if (listHeight + 14 < scrollPosition) {
          setLinksColor('white');
        }
        break;
      case 'white':
        if (listHeight + 10 > scrollPosition) {
          setLinksColor('black');
        }
        break;
    }
  }, [scrollPosition, lisnksColor])

  const renderLink = (href: string, title: string, className: string) => {
    return (
      <Link
        href={href}
        className={
          [
            'hover-brightness active-opacity',
            className,
          ].join(' ').trim()
        }>
        {title}
      </Link>
    );
  }

  const getListItem = (item: INavLink, index: number) => {
    if (item.subItems) return (
      <>
        {renderLink(item.href, item.title, [styles.link, styles[`link--${lisnksColor}`]].join(' '))}
        <div className={styles.subListWrapper}>
          <ul className={
            [
              'container mx-auto px-5 flex justify-center',
              styles.subList,
            ].join(' ').trim()
          }>
            {item.subItems.map((subItem, subItemIndex) => (
              <li key={`${index}_${subItemIndex}_subItem`} className={styles.subItem}>
                {renderLink(subItem.href, subItem.title, styles.subLink)}
              </li>
            ))}
          </ul>
        </div>
      </>
    );

    return renderLink(item.href, item.title, styles.link);
  }

  return (
    <nav className={styles.nav}>
      <ul ref={listRef} className={styles.navList}>
        {
          list.map((item, index) => (
            <li
              key={`${index}_nav`}
              className={styles.navItem}
            >
              {getListItem(item, index)}
            </li>
          ))
        }
      </ul>
    </nav>
  );
};
