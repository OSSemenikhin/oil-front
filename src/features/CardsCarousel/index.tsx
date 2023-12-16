import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import ProductCard, { TProduct } from 'features/ProductCard';
import NewsCard, { TNews } from 'features/NewsCard';
import CButtonWave from 'components/Buttons/CButtonWave';
import styles from './CardsCarousel.module.css';
import './CardsCarousel.css'

type TCardsCarousel = {
  cards: TProduct[] | TNews[];
  type: 'product' | 'news';
  title: string;
  navigateButton?: {
    text: string,
    href: string,
  };
}

export default function CardsCarousel({ cards, type, title, navigateButton }: TCardsCarousel) {
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

  const renderCard = (slide: TProduct | TNews) => {
    if (type === 'product' && 'name' in slide) {
      return <ProductCard product={slide} />;
    }
    if (type === 'news' && 'title' in slide) {
      return <NewsCard news={slide} />;
    }
    return null;
  };


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
            cards.map((slide: TProduct | TNews, index: number) => (
              <SwiperSlide key={`${index}_slide`}>
                <div className={styles.slide}>
                  {renderCard(slide)}
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className={[styles.navigation, 'container mx-auto'].join(' ').trim()}>
        <div ref={navigationPrevRef}>
          <CButtonWave classNameButton={['hover-shadow', styles.prevEl].join(' ').trim()}><LeftOutlined /></CButtonWave>
        </div>
        <div ref={navigationNextRef}>
          <CButtonWave classNameButton={['hover-shadow', styles.nextEl].join(' ').trim()}><RightOutlined /></CButtonWave>
        </div>
        {
          navigateButton && <CButtonWave classNameButton={['hover-brightness btn btn-main', styles.navigateButton].join(' ').trim()}>{navigateButton.text}</CButtonWave>
        }
      </div>
    </section>
  );
}
