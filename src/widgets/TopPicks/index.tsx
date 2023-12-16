import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import ProductCard, { TProduct } from 'features/ProductCard';
import CButtonWave from 'components/Buttons/CButtonWave';
import styles from './TopPicks.module.css';

export default function TopPicks() {
  const card: TProduct = {
    name: 'Lorem, ipsum dolor.',
    packaging: [1, 5],
    price: 3200,
    img: '/img/product/product.png',
  };

  const slides: TProduct[] = [];
  for (let i = 0; i < 10; i++) {
    const newCard = { ...card };
    newCard.new = true;
    newCard.hit = true;
    slides.push(newCard);
  };

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const [width, setWidth] = useState<number>(0);

  const calculateWidth = () => {
    setWidth(Math.max(window.innerWidth, 760))
  }

  useEffect(() => {
    calculateWidth();
    window.addEventListener('resize', calculateWidth);
  }, []);

  return (
    <section className={styles.content}>
      <h2 className={['site-title', styles.title].join(' ').trim()}>Популярное</h2>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        spaceBetween={0}
        slidesPerView={1}
        loop={false}
        speed={200}
        navigation={{ nextEl: navigationNextRef.current, prevEl: navigationPrevRef.current }}
        // navigation
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      >
        {
          slides.map((slide, index) => (
            <SwiperSlide key={`${index}_slide`}>
              <div className={styles.slide}>
                <ProductCard product={slide} />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
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
