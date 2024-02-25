import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { TProduct } from '@/types';
import CButtonWave from '@/shared/Buttons/CButtonWave';
import styles from './ProductDetails.module.css';
import './ProductDetails.css';

type TProductDetails = {
  product: TProduct;
}

export default function ProductDetails({ product }: TProductDetails) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [widthPreview, setWidthPreview] = useState<number>(75);
  const [widthPhoto, setWidthPhoto] = useState<number>(250);
  const [swiperDirection, setSwiperDirection] = useState<'vertical' | 'horizontal'>('horizontal');

  const swiperRef = useRef<SwiperRef>(null);

  const calculateWidth = () => {
    if (window.innerWidth >= 1280) {
      setSwiperDirection('vertical');
    } else {
      setSwiperDirection('horizontal');
    }

    if (window.innerWidth >= 640) {
      setWidthPreview(100);
      setWidthPhoto(300);
    } else {
      setWidthPreview(75);
      setWidthPhoto(250);
    }
  }

  useEffect(() => {
    calculateWidth();
    window.addEventListener('resize', calculateWidth);
  }, []);

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
    <section className={[styles.content, 'container mx-auto px-5'].join(' ').trim()}>
      <h2 className="site-title">{product.name}</h2>
      <div className={[styles.main, 'product-photo'].join(' ').trim()}>
        <div className={[styles.tabs].join(' ').trim()}>
          <ul className={['flex justify-center', styles.photoList].join(' ').trim()}>
            {
              product.img.map((img, index) => (
                <li
                  key={`${index}_photo`}
                  className={[
                    styles.photo, activeTab === index
                      ? styles.active
                      : '',
                  ].join(' ').trim()}
                >
                  {renderPhoto(img)}
                </li>
              ))
            }
          </ul>
          <Swiper
            direction={swiperDirection}
            modules={[FreeMode]}
            ref={swiperRef}
            slidesPerView="auto"
            freeMode={true}
            loop={false}
          >
            {
              product.img.map((img, index) => (
                <SwiperSlide key={`${index}_slide`} className={styles.swiperSlide}>
                  <button
                    className={[
                      styles.preview,
                      activeTab === index
                        ? styles.active
                        : '',
                    ].join(' ').trim()}
                    onClick={() => setActiveTab(index)}
                    role="button"
                  >
                    {renderPreview(img)}
                  </button>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className={styles.options}>
          <div
            className={[
              'flex justify-between items-center',
              styles.packaging,
            ].join(' ').trim()}
          >
            <p>Обьем упаковки:</p>
            <ul className='flex justify-between'>
              {
                product.packaging.map((volume: number, index: number) => <li key={`${index}_volume`}>
                  <button
                    className={[
                      'btn btn-main',
                      activeTab === index
                        ? 'active'
                        : '',
                    ].join(' ').trim()}
                    onClick={() => {
                      setActiveTab(index);
                      swiperRef.current?.swiper?.slideTo(index);
                    }}
                  >
                    {volume} л
                  </button>
                </li>)
              }
            </ul>
          </div>
          <div className={styles.action}>
            <p className={styles.price}>{product.price} ₸</p>
            <CButtonWave
              classNameButton={[
                'hover-shadow btn btn-main btn-main--inverted',
                styles.toCart,
              ].join(' ').trim()}
              waveColor='rgba(255, 255, 255, .3)'
            >
              В корзину
            </CButtonWave>
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
        <p className={styles.description}>{product.description}</p>
      </section>
      <section className={styles.characteristics}>
        <div className={styles.titleWrapper}>
          <h3 className='site-subtitle'>Спецификации:</h3>
        </div>
        <ul className={styles.specifications}>
          {product.specifications.map((spec, index) => <li key={`${index}_spec`} >
            {spec}
          </li>)}
        </ul>
      </section>
    </section>
  );
}
