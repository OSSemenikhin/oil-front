import { ShoppingCartOutlined } from '@ant-design/icons';

type TCartProps = {
  className?: string;
  classNameIcon?: string;
}

export default function Cart({ className, classNameIcon }: TCartProps) {
  return (
      <button className={
        [
          'hover-brightness',
          className,
        ].join(' ').trim()
      }>
        <ShoppingCartOutlined className={classNameIcon} />
      </button>
  );
}
