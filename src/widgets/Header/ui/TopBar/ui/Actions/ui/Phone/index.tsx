import { PhoneOutlined } from '@ant-design/icons';

type TPhoneProps = {
  className?: string;
  classNameIcon?: string;
}

export default function Phone({ className, classNameIcon }: TPhoneProps) {
  return (
      <a href="tel:88005553535"
        className={
          [
            'active-opacity hover-brightness p-1',
            className,
          ].join(' ').trim()
        }
      >
        <PhoneOutlined className={classNameIcon}/>
      </a>
  );
}
