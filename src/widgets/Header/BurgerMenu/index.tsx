import { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Modal, Menu, MenuProps, List, ConfigProvider } from 'antd';
import Link from 'next/link';
import { RightOutlined, EnvironmentOutlined } from '@ant-design/icons';
import CButtonWave from 'components/Buttons/CButtonWave';
import { INavList, IRegionList } from '../types';
import styles from './BurgerMenu.module.css'

type IBurgerMenu = {
  headerHeight: number;
  isOpen: boolean;
}

type MenuItem = Required<MenuProps>['items'][number];

export default forwardRef(function BurgerMenu({ headerHeight, isOpen }: IBurgerMenu, ref) {
  const list: INavList = [
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
  ];

  const regionsListInit: IRegionList = [
    { title: 'Караганда', active: true },
    { title: 'Караганда_2', active: false },
    { title: 'Караганда_3', active: false },
    { title: 'Караганда_4', active: false },
    { title: 'Караганда_5', active: false },
  ];

  const [isRegionModalOpen, setRegionModalOpen] = useState<boolean>(false);
  const [currentCity, setCurrentCity] = useState<string>('Караганда');
  const [regionsList, setRegionsList] = useState<IRegionList>(regionsListInit);
  const contentRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    contentRef,
  }));

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

  const getSubItems = (items: INavList, itemIndex: number): MenuItem[] => {
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

  console.log(menuItems);

  // const [current, setCurrent] = useState('1');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  const changeRegion = (index: number) => {
    const updatedList = regionsList.map((item, itemIndex) => ({
      ...item,
      active: itemIndex === index,
    }));
    setRegionsList(updatedList);
    setCurrentCity(regionsList[index].title);
    setRegionModalOpen(false);
  }

  return (
    <Modal
      className={styles.menu__wrapper}
      wrapClassName={styles.menu}
      open={isOpen}
      width='100vw'
      footer={null}
      zIndex={1}
    >
      <div
        ref={contentRef}
        className={styles.menu}
        style={{ paddingTop: `${headerHeight}px` }}
      >
        <CButtonWave buttonClassName={styles['button-wave']} waveClassName={styles['button-wave__wave']}>laksjdf;lkajsdf</CButtonWave>
        <div className={styles.region}>
          <button
            className={styles.region__button}
            onClick={() => setRegionModalOpen(true)}
          >
            <EnvironmentOutlined className={styles.region__icon} />
            <span className={styles.tegion__title}>Город: {currentCity}</span>
          </button>
          <Modal
            width={'20rem'}
            title={(<><EnvironmentOutlined className={styles.region__icon} /> Выберите город</>)}
            open={isRegionModalOpen}
            footer={false}
            closable={true}
            onCancel={() => setRegionModalOpen(false)}
          >
            <ul className={styles.region__list}>
              {
                regionsList.map((item, index) => (
                  <li key={`${index}_region`}>
                    <button
                      className={
                        [
                          styles.region__item,
                          item.active ? styles.active : '',
                          'hover-opacity',
                        ].join(' ').trim()
                      }
                      onClick={() => changeRegion(index)}
                    >
                      <EnvironmentOutlined
                        className={styles.region__icon}
                      />
                      <span className={styles.region__title}>
                        {item.title}
                      </span>
                    </button>
                  </li>
                ))
              }
            </ul>
          </Modal>
        </div>
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
            // header={<div style={{marginTop: '30px'}}>List</div>}
            // footer={<div>Footer</div>}
            bordered
            dataSource={list.map(item => item.title)}
            renderItem={(item, index) => (
              <List.Item className={styles.list__item}>
                <CButtonWave buttonClassName={styles['list-button']} waveClassName={styles['list-button__wave']}>
                  <Link
                    className={
                      [
                        styles.link,
                      ].join(' ').trim()
                    }
                    href={list[index].href}
                  >{item}
                    <RightOutlined className={styles.link__icon} />
                  </Link>
                </CButtonWave>
              </List.Item>
            )}
          />
        </ConfigProvider>
      </div>
    </Modal>
  );
});
