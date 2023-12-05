import { useRef, forwardRef, useImperativeHandle } from 'react';
import styles from './TopBar.module.css';

type ITopBar = {
  topBarRef: React.RefObject<HTMLDivElement>;

}

export default forwardRef(function TopBar({topBarRef}: ITopBar, ref) {
  const contentRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    contentRef,
  }));

  return(
    <div ref={topBarRef} className={styles.bar}>
      <div className='container mx-auto flex justify-between align-center'>Work</div>
    </div>

  )
});
