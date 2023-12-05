import styles from './NavList.module.css';

export default function NavList() {
  return (
    < nav className={
      [
        styles.nav,
        styles['nav--desctop']
      ].join(' ').trim()
    }
    >
      <ul className={
        [
          'flex items-center',
          styles.nav__list,
        ].join(' ').trim()
      }>
      </ul>
    </nav >
  );
}
