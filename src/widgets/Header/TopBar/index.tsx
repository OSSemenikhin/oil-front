import { useRef, useEffect, useState } from 'react';
import styles from './TopBar.module.css';

type ITopBarProps = {
  onMount: (hight: number) => void;
  scrollPosition: number;
}

export default function TopBar({ onMount, scrollPosition }: ITopBarProps) {
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const topBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topBarRef.current) {
      onMount(topBarRef.current.clientHeight);
      setContainerHeight(topBarRef.current.clientHeight);
    }
  }, [onMount]);

  return (
    <div ref={topBarRef} className={styles.bar}>
      <div
        className={styles.background}
        style={{ height: `${containerHeight + 10}px`, transform: `translateY(${Math.max(containerHeight + 10 - scrollPosition, 24)}px)` }}
      ></div>
      <div className='container mx-auto px-5 flex justify-between align-center'>TopBar</div>
    </div>

  )
}
