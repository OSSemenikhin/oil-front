import CardsCarousel from "shared/CardsCarousel";
import { TProduct } from 'entities/ProductCard';

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
    newCard.new = Math.random() > 0.5;
    newCard.hit = Math.random() > 0.5;
    slides.push(newCard);
  };

  return (
    <CardsCarousel
      cards={slides}
      type={'product'}
      title='Популярное'
      navigateButton={{ text: 'Перейти\u00A0в каталог', href: '#' }}
      carouselPrevEl="topPicksPrev"
      carouselNextEl="topPicksNext"
    />

  );
}
