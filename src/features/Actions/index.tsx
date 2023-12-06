import CBurger from 'components/CBurger';
import Search from 'features/Search';
import Cart from 'features/Cart';
import CPhone from 'components/CPhone';
import styles from './Actions.module.css';

type IActionsProps = {
  classNameWrapper?: string,
  classNamePhoneIcon: string,
  classNameCartIcon: string,
  classNameSearchIcon: string,
}

export default function Actions({ classNameWrapper, classNameCartIcon, classNameSearchIcon, classNamePhoneIcon }: IActionsProps) {
  return (
    <div className={
      [
        'flex justify-between items-center basis-20 sm:basis-2/6 lg:basis-0',
        styles.content,
        classNameWrapper,
      ].join(' ').trim()
    }>
      <Search
        classNameWrapper={styles['search-wrapper']}
        classNameIcon={
          [
            styles.search,
            classNameSearchIcon
          ].join(' ').trim()
        }
      />
      <CPhone
        className={styles.phone}
        classNameIcon={classNamePhoneIcon}
      />
      <Cart
        className={styles.cart}
        classNameIcon={
          [
            styles.cart__icon,
            classNameCartIcon,
          ].join(' ').trim()
        }
      />
    </div>
  )
}
