import { ShoppingCartOutlined } from '@ant-design/icons';

type ICCartProps = {
  className?: string;
  classNameIcon?: string;
}

export default function CPhone({ className, classNameIcon }: ICCartProps) {
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
