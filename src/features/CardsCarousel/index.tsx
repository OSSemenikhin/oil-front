import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import ProductCard, { TProduct } from 'features/ProductCard';
import CButtonWave from 'components/Buttons/CButtonWave';
import styles from './CardsCarousel.module.css';
import './CardsCarousel.css'

type TCardsCarousel = {
  cards: TProduct[];
  type: 'product' | 'news';
  title: string;
}

export default function CardsCarousel({ cards, type, title }: TCardsCarousel) {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const [slidesPerView, setSlidesPerView] = useState<number>(1);

  const calculateWidth = () => {
    if (window.innerWidth > 1396) {
      setSlidesPerView(4);
    } else if (window.innerWidth >= 1024) {
      setSlidesPerView(3);
    } else if (window.innerWidth >= 692) {
      setSlidesPerView(2);
    } else if (window.innerWidth >= 600 && window.innerWidth < 640) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(1);
    }
  }

  useEffect(() => {
    calculateWidth();
    window.addEventListener('resize', calculateWidth);
  }, []);

  return (
    <section className={[styles.content].join(' ').trim()}>
      <h2 className={['site-title', styles.title].join(' ').trim()}>{title}</h2>
      <div className={styles.swiper}>
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={slidesPerView}
          loop={false}
          speed={200}
          navigation={{ nextEl: navigationNextRef.current, prevEl: navigationPrevRef.current }}
        // navigation
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
          {
            cards.map((slide, index) => (
              <SwiperSlide key={`${index}_slide`}>
                <div className={styles.slide}>
                  {type === 'product' && <ProductCard product={slide} />}
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className={styles.navigation}>
        <div ref={navigationPrevRef}>
          <CButtonWave classNameButton={['hover-shadow', styles.prevEl].join(' ').trim()}><LeftOutlined /></CButtonWave>
        </div>
        <div ref={navigationNextRef}>
          <CButtonWave classNameButton={['hover-shadow', styles.nextEl].join(' ').trim()}><RightOutlined /></CButtonWave>
        </div>
      </div>
    </section>
  );
}
