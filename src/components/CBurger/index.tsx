import React, { useState, useEffect, useCallback } from 'react';
import styles from './CBurger.module.css';

type IBurgerProps = {
  onButtonClick: () => void;
  onOpenCallack: () => void;
  isMenuOpen: boolean;
}

export default function Burger({ onButtonClick, isMenuOpen, onOpenCallack }: IBurgerProps) {
  const animationSpeed = 150;
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isAnimation, setIsAnimation] = useState<boolean>(false);
  const [isDelay, setDelay] = useState<boolean>(false);

  const open = useCallback(() => {
    setTimeout(() => {
      setIsAnimation(false);
      setDelay(true);
      setIsActive(true);
      onOpenCallack();
    }, animationSpeed);
  }, [onOpenCallack]);

  const close = useCallback(() => {
    setIsActive(false);
    setTimeout(() => {
      setIsAnimation(false);
      setDelay(false);
    }, animationSpeed);
  }, []);

  const toggleBurger = useCallback((isOpen = true, click = true) => {
    if(click) onButtonClick();
    setIsAnimation(true);
    if (isOpen) open();
    else close();
  }, [onButtonClick, open, close]);

  useEffect(() => {
    if (isMenuOpen === isActive) return;
    toggleBurger(isMenuOpen, false);
  }, [isMenuOpen, isActive, toggleBurger]);

  return (
    <button
      className={
        [
          'active-opacity hover-brightness',
          styles.burger,
          isAnimation ? styles.animation : null,
          isActive ? styles.active : null,
          isDelay ? styles['delay-opacity'] : null,
        ].join(' ').trim()
      }
      onClick={() => toggleBurger(true)}
    >
      <span className={styles.bars}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </span>
    </button>
  );
};
