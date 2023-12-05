import CBurger from 'components/CBurger';
import CSearch from 'components/CSearch';
import CPhone from 'components/CPhone';
import CCart from 'components/CCart';
import styles from './Actions.module.css';

type IActionsProps = {
  onBurgerClick: () => void;
  onOpenMenuCallack: () => void;
  isMenuOpen: boolean;
}

export default function Actions({ onBurgerClick, isMenuOpen, onOpenMenuCallack }: IActionsProps) {
  return (
    <div className='flex justify-between items-center basis-20 sm:basis-2/6 lg:basis-36'>
      <CSearch iconClassName={styles.search} />
      <CPhone className={styles.phone} />
      <CCart className={styles.cart} iconClassName={styles.cart__icon}/>
      <CBurger onButtonClick={() => onBurgerClick()} isMenuOpen={isMenuOpen} onOpenCallack={() => onOpenMenuCallack()} />
    </div>
  )
}
