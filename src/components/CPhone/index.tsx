import { PhoneOutlined } from '@ant-design/icons';

type ICPhoneProps = {
  className?: string;
  iconClassName?: string;
}

export default function CPhone({ className, iconClassName }: ICPhoneProps) {
  return (
      <a href="tel:88005553535"
        className={
          [
            'active-opacity hover-brightness p-1',
            className,
          ].join(' ').trim()
        }
      >
        <PhoneOutlined className={iconClassName}/>
      </a>
  );
}
