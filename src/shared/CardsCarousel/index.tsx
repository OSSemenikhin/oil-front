import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import ProductCard, { TProduct } from '../../entities/ProductCard';
import NewsCard, { TNews } from '../../entities/NewsCard';
import CButtonWave from 'components/Buttons/CButtonWave';
import styles from './CardsCarousel.module.css';
import './CardsCarousel.css'

type TCardsCarousel = {
  cards: TProduct[] | TNews[];
  type: 'product' | 'news';
  title: string;
  carouselNextEl: string;
  carouselPrevEl: string;
  navigateButton?: {
    text: string,
    href: string,
  };
}

export default function CardsCarousel({ cards, type, title, carouselNextEl, carouselPrevEl, navigateButton }: TCardsCarousel) {
  const router = useRouter();
  const uniqueString = Math.round(Math.random() * 1000000).toString() + title;

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
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={false}
          speed={200}
          navigation={{ nextEl: `.${carouselNextEl}`, prevEl: `.${carouselPrevEl}` }}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 1,
            },
            692: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1396: {
              slidesPerView: 4,
            },
          }}
        >
          {
            cards.map((slide: TProduct | TNews, index: number) => (
              <SwiperSlide key={`${index}_slide`}>
                <div className={styles.slide} onClick={() => router.push(type === 'product' ? '/product' : '/news')}>
                  {renderCard(slide)}
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className={[styles.navigation, 'container mx-auto px-5'].join(' ').trim()}>
        <CButtonWave classNameButton={['hover-shadow', styles.prevEl, carouselPrevEl].join(' ').trim()} waveColor='rgb(227, 0, 33)'><LeftOutlined /></CButtonWave>
        <CButtonWave classNameButton={['hover-shadow', styles.nextEl, carouselNextEl].join(' ').trim()} waveColor='rgb(227, 0, 33)'><RightOutlined /></CButtonWave>
        {
          navigateButton && (
            <CButtonWave
              classNameButton={['hover-brightness btn btn-main btn-main--inverted', styles.navigateButton].join(' ').trim()}
              waveColor='rgba(255, 255, 255, .3)'
            >
              {navigateButton.text}
            </CButtonWave>
          )
        }
      </div>
    </section>
  );
}
