import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Dropdown } from 'antd';
import { INavList, INavLink } from 'widgets/Header/types';
import styles from './NavListDesktop.module.css'

export default function NavListDesktop() {
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
  ];

  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean[]>(list.map(item => false));
  const [defaultPosition, setDefaultPosition] = useState<string>('0_0_subItem');

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

  const getListItem = (item: INavLink, index: number) => {
    if (item.subItems) return (
      <Dropdown
        overlayClassName={styles.overlay}
        menu={{
          items: getSubItems(item.subItems, index),
          selectable: true,
          defaultSelectedKeys: [defaultPosition]
        }}
        // buttonsRender={() => ['1'].map(i => <button>{i}</button>) }
        onOpenChange={(nextOpen, info) => handleOpenChange(nextOpen, info, index)}
        open={isOpen[index]}
      >
        <Link href={item.href} className={styles.nav__link}>{item.title}</Link>
      </Dropdown>
    );

    return <Link href={item.href} className={styles.nav__link}>{item.title}</Link>;
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
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
