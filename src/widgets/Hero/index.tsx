import { useEffect, useState, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { setHeight } from '@/app/Store/model/heroHeightSlice';
import styles from './Hero.module.css';
import './Hero.css';

type TPaginationOptions = {
  clickable: boolean;
  renderBullet: (index: number, className: string) => string;
};

type TSlide = {
  path: string;
  titleMobile: string;
  titleDesktop: string;
  href?: string;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const slides: TSlide[] = [
    {
      path: 'slide1.jpg',
      titleMobile: 'Lorem, ipsum dolor.',
      titleDesktop: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
    },
    {
      path: 'slide2.jpg',
      titleMobile: 'Lorem, ipsum.',
      titleDesktop: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem.',
    }
  ];

  const [width, setWidth] = useState<number>(0);
  const dispatch = useDispatch();

  const calculateWidth = () => {
    setWidth(Math.max(window.innerWidth, 760))
  }

  const calculateHeight = () => {
    if (containerRef.current) {
      dispatch(setHeight(containerRef.current.clientHeight));
    }
  };

  const calculateSizes = () => {
    calculateWidth();
    calculateHeight();
  }

  useEffect(() => {
    calculateSizes();
    window.addEventListener('resize', calculateSizes);
  }, []);

  const paginationOptions: TPaginationOptions = {
    clickable: true,
    renderBullet: (index, className) => (
      `<span class="${className} hero-bullet"></span>`
    ),
  };

  return (
    <section ref={containerRef} className={styles.hero}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{delay: 5000, disableOnInteraction: true}}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={2000}
        pagination={paginationOptions}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {
          slides.map((slide, index) => (
            <SwiperSlide key={`${index}_slide`}>
              <Image
                className={styles.image}
                src={`/img/hero/${slide.path}`}
                alt="Description of the image"
                width={width}
                height={width}
              />
              <div className={styles.content}>
                <h2 className={styles.titleMobile}>{slide.titleMobile}</h2>
                <h2 className={styles.titleDesktop}>{slide.titleDesktop}</h2>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
}
