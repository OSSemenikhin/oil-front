import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Tabs } from 'antd';
import { TProduct } from 'types';
import CButtonWave from 'components/Buttons/CButtonWave';
import styles from './ProductDetails.module.css';

type TabPosition = 'left' | 'bottom';

type TProductDetails = {
  product: TProduct;
}

export default function ProductDetails({ product }: TProductDetails) {
  const [activeTab, setActiveTab] = useState<string>('0');
  const [tabPosition, setTabPosition] = useState<TabPosition>('bottom');
  const [widthPreview, setWidthPreview] = useState<number>(100);
  const [widthPhoto, setWidthPhoto] = useState<number>(250);

  // const calculateWidth = () => {
  //   setWidth(Math.max(window.innerWidth, 760))
  // }

  // useEffect(() => {
  //   calculateWidth();
  //   window.addEventListener('resize', calculateWidth);
  // }, []);

  const renderPreview = (img: string) => {
    return (
      <Image
        className={styles.image}
        src={img}
        alt="Description of the image"
        width={widthPreview}
        height={widthPreview}
      />
    );
  }

  const renderPhoto = (img: string) => {
    return (
      <Image
        className={styles.image}
        src={img}
        alt="Description of the image"
        width={widthPhoto}
        height={widthPhoto}
      />
    );
  }

  return (
    <div className={[styles.content, 'container mx-auto'].join(' ').trim()}>
      <h2 className="site-title">{product.name}</h2>
      <div className={styles.main}>
        <div className={styles.left}>
          <Tabs
            activeKey={activeTab}
            tabPosition={tabPosition}
            onTabClick={(key) => setActiveTab(key)}
            items={product.img.map((_, i) => {
              const id = String(i);
              return {
                label: renderPreview(_),
                key: id,
                children: renderPhoto(_),
              };
            })}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.action}>
            <p className={styles.price}>{product.price} тенге</p>
            <CButtonWave classNameButton={['hover-shadow', styles.toCart].join(' ').trim()}>В корзину</CButtonWave>
          </div>
          <div className={styles.packaging}>
            <p>Обьем упаковки:</p>
            <ul>
              {
                product.packaging.map((volume: number, index: number) => <li key={`${index}_volume`}>
                  <button onClick={() => setActiveTab(`${index}`)}>{volume} л</button>
                </li>)
              }
            </ul>
          </div>
          <div className={styles.item}>
            <p>Артикул:</p>
            <p>{product.item}</p>
          </div>
        </div>
      </div>
      <section className={styles.characteristics}>
        <div className={styles.titleWrapper}>
          <h2 className='site-title'>Описание:</h2>
        </div>
        <div className={styles.description}>{product.description}</div>
        <h3 className='site-subtitle'>Спецификации:</h3>
        <ul className={styles.specifications}></ul>
      </section>
    </div>
  );
}
