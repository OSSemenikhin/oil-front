import React, { useState } from 'react';
import styles from './Burger.module.css';

export default function Burger() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isAnimation, setIsAnimation] = useState<boolean>(false);
  const [isDelay, setDelay] = useState<boolean>(false);

  const toggleBurger = () => {
    setIsAnimation(true);
    isActive && setIsActive(prevIsActive => !prevIsActive);
    setTimeout(() => {
      setIsAnimation(false);
      setDelay(prevIsActive => !prevIsActive);
      !isActive && setIsActive(prevIsActive => !prevIsActive);
    }, 150);
  };

  return (
    <button
      className={
        [
          'active-opacity',
          styles.burger,
          isAnimation ? styles.animation : null,
          isActive ? styles.active : null,
          isDelay ? styles['delay-opacity'] : null,
        ].join(' ').trim()
      }
      onClick={toggleBurger}
    >
      <span className={styles.bars}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </span>
    </button>
  );
};
