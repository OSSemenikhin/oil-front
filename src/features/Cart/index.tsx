import { ShoppingCartOutlined } from '@ant-design/icons';

type TCCartProps = {
  className?: string;
  classNameIcon?: string;
}

export default function CPhone({ className, classNameIcon }: TCCartProps) {
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
