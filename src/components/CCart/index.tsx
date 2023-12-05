import { ShoppingCartOutlined } from '@ant-design/icons';

type ICCartProps = {
  className?: string;
  iconClassName?: string;
}

export default function CPhone({ className, iconClassName }: ICCartProps) {
  return (
      <button className={
        [
          'hover-brightness',
          className,
        ].join(' ').trim()
      }>
        <ShoppingCartOutlined className={iconClassName} />
      </button>
  );
}
