import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from 'assets/logo-white.svg';
import { ConfigProvider, Divider } from 'antd';
import { Collapse } from 'antd';
import { TNavLink } from 'features/types';
import styles from './Footer.module.css';
import './Footer.css';

const catalog: TNavLink[] = [
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

const navigation: TNavLink[] = [
  {
    title: 'О нас',
    href: '#',
  },
  {
    title: 'Доставка',
    href: '#',
  },
  {
    title: 'Оплата',
    href: '#',
  },
  {
    title: 'Контакты',
    href: '#',
  },
  {
    title: 'Одобрения производителей',
    href: '#',
  },
]

export default function Footer() {
  const [isListOpen, setListOpen] = useState<boolean>(false);

  const checkWidth = () => {
    if (window.innerWidth >= 768) setListOpen(true);
    else setListOpen(false);
  }

  useEffect(() => {
    checkWidth();
    window.addEventListener('resize', checkWidth);
  }, []);

  const renderLink = (href: string, title: string) => {
    return <Link className={[styles.link, 'hover-underline active-opacity'].join(' ').trim()} href={href}>{title}</Link>;
  }

  const getCollapseChldrens = (key: string, arr: TNavLink[]) => {
    return (
      <ul className={styles.list}>
        {
          arr.map((link, index) => (
            <li key={`${index}_${key}`}>
              {renderLink(link.href, link.title)}
            </li>
          ))
        }
      </ul>
    )
  }

  const renderExpandTitle = (title: string) => {
    return <h2 className={[styles.title, styles.expand,].join(' ').trim()}>{title}</h2>;
  }

  return (
    <footer className={styles.footer}>
      <div className="container mx-auto px-5 pb-10">
        <nav className={styles.content}>
          <div className={styles.info}>
            <h2 className={[styles.title, 'py-3'].join(' ').trim()}><i>Emka</i>&nbsp; смазочные материалы</h2>
            <Link className={[styles.phone, 'hover-brightness'].join(' ').trim()} href="tel:8805553535">88005553535</Link>
            <p className={styles.workingMode}>09:00-18:00 Караганда</p>
            <Link className={[styles.email, 'hover-brightness'].join(' ').trim()} href='mailto:example@gmail.com'>example@gmail.com</Link>
            <p className={styles.address}>r. Караганда ул. Улица д. 11</p>
          </div>
          <ConfigProvider
            theme={{
              components: {
                Collapse: {
                  contentPadding: 0,
                  headerPadding: '1rem 0',
                },
              },
            }}
          >
            <Collapse
              className={styles.collapse}
              ghost
              activeKey={isListOpen ? ['1', '2'] : undefined}
              expandIconPosition='end'
              items={[
                {
                  key: '1',
                  label: renderExpandTitle('Каталог'),
                  children: getCollapseChldrens('catalog', catalog),
                },
              ]}
            />
            <Collapse
              className={styles.collapse}
              ghost
              activeKey={isListOpen ? ['1', '2'] : undefined}
              expandIconPosition='end'
              items={[
                {
                  key: '2',
                  label: renderExpandTitle('Меню'),
                  children: getCollapseChldrens('navigation', navigation),
                },
              ]}
            />
          </ConfigProvider>
          <Link className={styles.logo} href="/">
            <Image
              priority
              src={logo}
              alt="emka"
            />
          </Link>
        </nav>
        {/* <div className={styles.logoWrapper}> */}
        {/* </div> */}
      </div>
      <p className={styles.copyright}>© «Emka», 2023</p>
    </footer>
  )
}
