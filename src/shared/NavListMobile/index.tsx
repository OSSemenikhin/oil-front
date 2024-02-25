import { MenuProps, Menu, List, ConfigProvider } from 'antd';
import Link from 'next/link';
import { RightOutlined } from '@ant-design/icons';
import CButtonWave from 'components/Buttons/CButtonWave';
import { TNavLink } from 'shared/types';
import styles from './NavListMobile.module.css'

type MenuItem = Required<MenuProps>['items'][number];

export default function NavListMobile() {
  const list: TNavLink[] = [
    {
      title: 'Пункт_1',
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
      title: 'Пункт_2',
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
      title: 'Пункт_3',
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
      title: 'O нас',
      href: '/about/us',
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
      href: '/about/delivery',
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

  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      children,
      label,
      type,
    } as MenuItem;
  }

  const getSubItems = (items: TNavLink[], itemIndex: number): MenuItem[] => {
    return items.map((subItem, subItemIndex) => {
      return getItem(subItem.title, `${itemIndex}_${subItemIndex}_subItem`)
    });
  }

  const menuItems: MenuProps['items'] = list.map((item, itemIndex) => {
    return getItem(
      item.title,
      `${itemIndex}_item`,
      item.subItems ? getSubItems(item.subItems, itemIndex) : undefined,
    )
  });

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };


  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemColor: 'rgb(227, 0, 33)',
            itemHoverBg: 'rgba(36, 36, 36, 0.23)',
            itemSelectedBg: 'rgb(36, 36, 36)',
            itemSelectedColor: 'rgb(227, 0, 33)',
          }
        }
      }}
    >
      {/* <Menu
            style={{ width: '100vw' }}
            theme={'light'}
            onClick={onClick}
            mode="inline"
            // selectedKeys={[current]}
            items={menuItems}
          /> */}
      <List
        className={styles.list}
        size="large"
        bordered
        dataSource={list.map(item => item.title)}
        renderItem={(item, index) => (
          <List.Item className={styles.item}>
            <CButtonWave classNameButton={styles.button} waveClassName={styles.wbutton}>
              <Link
                className={
                  [
                    'px-5 py-5',
                    styles.link,
                  ].join(' ').trim()
                }
                href={list[index].href}
              >{item}
                <RightOutlined className={styles.icon} />
              </Link>
            </CButtonWave>
          </List.Item>
        )}
      />
    </ConfigProvider>
  );
};
