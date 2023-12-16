import CardsCarousel from "features/CardsCarousel";
import { TNews } from "features/NewsCard";

export default function News() {
  const card: TNews = {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '/img/news/news.jpg',
    date: '01.01.2001',
  };

  const slides: TNews[] = [];
  for (let i = 0; i < 10; i++) {
    const newCard = { ...card };
    slides.push(newCard);
  };

  return (
    <CardsCarousel cards={slides} type={'news'} title='Статьи и Новости' navigateButton={{text: 'К списку статей', href: '#'}}/>
  );
}
