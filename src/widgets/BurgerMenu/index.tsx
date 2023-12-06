import { useRef, forwardRef, useImperativeHandle } from 'react';
import { Modal } from 'antd';
import NavListMobile from 'features/NavListMobile';
import RegionList from 'features/RegionList';
import styles from './BurgerMenu.module.css'

type IBurgerMenu = {
  headerHeight: number;
  isOpen: boolean;
}

export default forwardRef(function BurgerMenu({ headerHeight, isOpen }: IBurgerMenu, ref) {
  const contentRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    contentRef,
  }));

  return (
    <Modal
      className={styles.menu__wrapper}
      wrapClassName={styles.menu}
      open={isOpen}
      width='100vw'
      footer={null}
      zIndex={1}
    >
      <div
        ref={contentRef}
        className={
          [
            'container mx-auto sm:px-20',
            styles.menu,
          ].join(' ').trim()
        }
        style={{ paddingTop: `${headerHeight}px` }}
      >
        <RegionList classNameWrapper={styles.region}/>
        <NavListMobile />
      </div>
    </Modal>
  );
});
