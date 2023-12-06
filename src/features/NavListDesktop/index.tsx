import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Dropdown } from 'antd';
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
        }
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

  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean[]>(list.map(item => false));
  const [defaultPosition, setDefaultPosition] = useState<string>('0_0_subItem');
  const [lisnksColor, setLinksColor] = useState<'red' | 'black'>('red');
  const listRef = useRef<HTMLUListElement>(null);// }

  useEffect(() => {
    if (!listRef.current) return;
    const listHeight = listRef.current.getBoundingClientRect().height;
    switch (lisnksColor) {
      case 'red':
        if (listHeight + 14 < scrollPosition) {
          setLinksColor('black');
        }
        break;
      case 'black':
        if (listHeight + 10 > scrollPosition) {
          setLinksColor('red');
        }
        break;
    }
  }, [scrollPosition, lisnksColor])

  const handleOpenChange = (nextOpen: any, info: any, itemIndex: number) => {
    const opened = isOpen.map((item, index) => index === itemIndex ? nextOpen : false);
    setIsOpen(opened);
  };

  const getSubItems = (items: INavList, itemIndex: number) => {
    return items.map((item, index) => {
      const key = `${itemIndex}_${index}_subItem`;
      return {
        label: item.title,
        key: key,
        onClick: () => {
          setDefaultPosition(key);
          router.push(`/${item.href}`);
        },
      };
    });
  }

  const renderLink = (href: string, title: string) => {
    return (
      <Link
        href={href}
        className={
          [
            styles.nav__link,
            styles[`nav__link--${lisnksColor}`]
          ].join(' ').trim()
        }>
        {title}
      </Link>
    );
  }

  const getListItem = (item: INavLink, index: number) => {
    if (item.subItems) return (
      <Dropdown
        trigger={['click', 'hover']}
        overlayClassName={styles.overlay}
        menu={{
          items: getSubItems(item.subItems, index),
          selectable: true,
          defaultSelectedKeys: [defaultPosition]
        }}
        onOpenChange={(nextOpen, info) => handleOpenChange(nextOpen, info, index)}
        open={isOpen[index]}
      >
        {renderLink(item.href, item.title)}
      </Dropdown>
    );

    return renderLink(item.href, item.title);
  }

  return (
    <nav className={styles.nav}>
      <ul ref={listRef} className={styles.nav__list}>
        {
          list.map((item, index) => (
            <li
              key={`${index}_nav`}
              className={
                [
                  'hover-brightness active-opacity',
                  styles.nav__item,
                ].join(' ').trim()
              }
            >
              {getListItem(item, index)}
            </li>
          ))
        }
      </ul>
    </nav>
  );
};
