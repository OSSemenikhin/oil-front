import { useState } from 'react';
import { Modal } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { TRegionList } from 'widgets/Header/types';
import styles from './RegionLIst.module.css';

type TRegionListProps = {
  classNameWrapper?: string;
}

export default function RegionList({ classNameWrapper }: TRegionListProps) {
  const regionsListInit: TRegionList = [
    { title: 'Караганда', active: true },
    { title: 'Караганда_2', active: false },
    { title: 'Караганда_3', active: false },
    { title: 'Караганда_4', active: false },
    { title: 'Караганда_5', active: false },
  ];

  const [isRegionModalOpen, setRegionModalOpen] = useState<boolean>(false);
  const [currentCity, setCurrentCity] = useState<string>('Караганда');
  const [regionsList, setRegionsList] = useState<TRegionList>(regionsListInit);

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
    <div className={classNameWrapper}>
      <button
        className={styles.region__button}
        onClick={() => setRegionModalOpen(true)}
      >
        <EnvironmentOutlined className={styles.icon} />
        <span className={styles.tegion__title}>Город: {currentCity}</span>
      </button>
      <Modal
        width={'20rem'}
        title={(<h2 className={styles.title}>Выберите город</h2>)}
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
                      styles.item,
                      item.active ? styles.active : '',
                      'hover-opacity',
                    ].join(' ').trim()
                  }
                  onClick={() => changeRegion(index)}
                >
                  <EnvironmentOutlined
                    className={styles.icon}
                  />
                  <span className={styles.title}>
                    {item.title}
                  </span>
                </button>
              </li>
            ))
          }
        </ul>
      </Modal>
    </div>
  );
}
