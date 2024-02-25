import Search from './ui/Search';
import Cart from './ui/Cart';
import Phone from './ui/Phone';
import styles from './Actions.module.css';

type TActionsProps = {
  classNameWrapper?: string,
  classNamePhoneIcon: string,
  classNameCartIcon: string,
  classNameSearchIcon: string,
}

export default function Actions({ classNameWrapper, classNameCartIcon, classNameSearchIcon, classNamePhoneIcon }: TActionsProps) {
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
      <Phone
        className={styles.phone}
        classNameIcon={classNamePhoneIcon}
      />
      <Cart
        className={styles.cart}
        classNameIcon={
          [
            styles.cartIcon,
            classNameCartIcon,
          ].join(' ').trim()
        }
      />
    </div>
  )
}
