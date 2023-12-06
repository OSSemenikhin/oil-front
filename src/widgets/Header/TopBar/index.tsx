import { useRef, useEffect } from 'react';
import styles from './TopBar.module.css';

type ITopBarProps = {
  onMount: (hight: number) => void;
}

export default function TopBar({ onMount }: ITopBarProps) {
  const topBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topBarRef.current) {
      onMount(topBarRef.current.clientHeight);
    }
  }, [onMount]);

  return (
    <div ref={topBarRef} className={styles.bar}>
      <div className='container mx-auto px-5 flex justify-between align-center'>TopBar</div>
    </div>

  )
}
