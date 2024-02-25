import React, { useRef, ReactNode, MouseEvent } from 'react';
import styles from './CButtonWave.module.css';

type TCButtonWave = {
  onClick?: (event: MouseEvent) => void;
  children?: ReactNode;
  classNameButton?: string;
  waveClassName?: string;
  waveColor?: string;
}

export default function CButtonWave({ children, onClick, classNameButton, waveClassName, waveColor }: TCButtonWave) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rippleBtn = buttonRef.current;

    if (!rippleBtn) {
      return;
    }

    const rect = rippleBtn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const wave = document.createElement('span');
    wave.className = [styles.wave, waveClassName ?? ''].join(' ').trim();
    wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`;
    waveColor && (wave.style.backgroundColor = waveColor);
    rippleBtn.appendChild(wave);

    setTimeout(() => wave.remove(), 500);

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={
        [
          styles.button,
          classNameButton ?? '',
        ].join(' ').trim()
      }
    >
      {children}
    </button>
  );
};
