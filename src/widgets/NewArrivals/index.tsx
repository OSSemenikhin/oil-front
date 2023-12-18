import CardsCarousel from "features/CardsCarousel";
import { TProduct } from 'features/ProductCard';

export default function NewArrivals() {
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
    newCard.hit = Math.random() > 0.5;
    slides.push(newCard);
  };

  return (
    <CardsCarousel
      cards={slides}
      type={'product'}
      title='Новинки'
      navigateButton={{ text: 'Перейти\u00A0в каталог', href: '#' }}
      carouselPrevEl="newArrivalsPrev"
      carouselNextEl="newArrivalsNext"
    />

  );
}
