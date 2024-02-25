import { ShoppingCartOutlined } from '@ant-design/icons';

type TCCartProps = {
  className?: string;
  classNameIcon?: string;
}

export default function CCart({ className, classNameIcon }: TCCartProps) {
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
