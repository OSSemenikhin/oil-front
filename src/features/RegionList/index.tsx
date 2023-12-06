import { useState } from 'react';
import { Modal } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { IRegionList } from 'widgets/Header/types';
import styles from './RegionLIst.module.css';

type IRegionListProps = {
  classNameWrapper?: string;
}

export default function RegionList({ classNameWrapper }: IRegionListProps) {
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
  );
}
