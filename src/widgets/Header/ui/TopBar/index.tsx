import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { TNavLink } from '@/shared/types';
import RegionList from '@/features/RegionList';
import Actions from '@/features/Actions';
import styles from './TopBar.module.css';

type TTopBarProps = {
  onMount: (hight: number) => void;
  topBarMenu: TNavLink[],
}

export default function TopBar({ onMount, topBarMenu }: TTopBarProps) {
  const topBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topBarRef.current) {
      onMount(topBarRef.current.clientHeight);
    }
  }, [onMount]);

  return (
    <div ref={topBarRef} className={styles.bar}>
      <div className='container mx-auto px-5 flex justify-between items-center'>
        <RegionList classNameWrapper={
          [
            styles.region,
            'hover-brightness'
          ].join(' ').trim()
        } />
        <div className='flex'>
          <ul className='flex items-center gap-x-5 px-5'>
            {
              topBarMenu.map((link, index) => (
                <li key={`${index}_link`}>
                  <Link
                    className={[styles.link, 'hover-brightness'].join(' ').trim()}
                    href={`/about/${link.href}`}
                    prefetch
                  >
                    {link.title}
                  </Link>
                </li>
              ))
            }
          </ul>
          <Actions
            classNameWrapper={styles.actions}
            classNameCartIcon={styles.cart}
            classNamePhoneIcon={styles.phone}
            classNameSearchIcon={styles.search}
          />
        </div>
      </div>
    </div>

  )
}

