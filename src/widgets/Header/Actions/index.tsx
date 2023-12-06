import CBurger from 'components/CBurger';
import Search from 'features/Search';
import Cart from 'features/Cart';
import CPhone from 'components/CPhone';
import styles from './Actions.module.css';

type IActionsProps = {
  onBurgerClick: () => void;
  onOpenMenuCallack: () => void;
  isMenuOpen: boolean;
}

export default function Actions({ onBurgerClick, isMenuOpen, onOpenMenuCallack }: IActionsProps) {
  return (
    <div className='flex justify-between items-center basis-20 sm:basis-2/6 lg:basis-0'>
      <Search wrapperClassName={styles['search-wrapper']} iconClassName={styles.search} />
      <CPhone className={styles.phone} />
      <Cart className={styles.cart} iconClassName={styles.cart__icon}/>
      <CBurger onButtonClick={() => onBurgerClick()} isMenuOpen={isMenuOpen} onOpenCallack={() => onOpenMenuCallack()} />
    </div>
  )
}
