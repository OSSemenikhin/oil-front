import { useState, useEffect } from 'react'
import Image from 'next/image';
import styles from './ProductCard.module.css';

export type TProduct = {
  name: string;
  packaging: number[];
  price: number;
  img: string;
  new?: boolean;
  hit?: boolean;
}

type TProductCard = {
  product: TProduct;
}

export default function ProductCard({ product }: TProductCard) {
  const [isNew, setNew] = useState<boolean>(false);
  const [isHit, setHit] = useState<boolean>(false);

  useEffect(() => {
    setNew(product.new ?? false);
    setHit(product.hit ?? false);
  }, [product.new, product.hit]);

  return (
    <article className={['hover-shadow', styles.card].join(' ').trim()} >
      <div className={styles.badge}>
        {isNew && <p className={styles.new}>Новинка</p>}
        {isHit && <p className={styles.hit}>Хит</p>}
      </div>
      <Image
        className={styles.image}
        src={product.img}
        alt="Description of the image"
        width={250}
        height={250}
      />
      <h3 className={styles.title}>{product.name}</h3>
      <div className={styles.package}>
        <p>Фасовка:</p>
        {product.packaging.map((pack, index) => <p key={`${index}_pack`}>{pack} л{ (index + 1) < product.packaging.length ? ',' : ''}</p>)}
      </div>
      <p className={styles.price}>от {product.price} ₸</p>
    </article >
  );
}
