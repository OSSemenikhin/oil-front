import Image from 'next/image';
import styles from './NewsCard.module.css';

export type TNews = {
  title: string;
  img: string;
  date: string;
}

type TNewsCard = {
  news: TNews;
}

export default function NewsCard({ news }: TNewsCard) {
  return (
    <article className={['hover-shadow', styles.card].join(' ').trim()} >
      <Image
        className={styles.image}
        src={news.img}
        alt="Description of the image"
        width={250}
        height={188}
      />
      <h3 className={styles.title}>{news.title}</h3>
      <p className={styles.date}>{news.date}</p>
    </article >
  );
}
