import { useRef, useEffect, useState } from 'react';
import RegionList from 'features/RegionList';
import Actions from 'features/Actions';
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
      <div className='container mx-auto px-5 flex justify-between items-center'>
        <RegionList classNameWrapper={styles.region} />
        <Actions
          classNameWrapper={styles.actions}
          classNameCartIcon={styles.cart}
          classNamePhoneIcon={styles.phone}
          classNameSearchIcon={styles.search}
        />
      </div>
    </div>

  )
}
