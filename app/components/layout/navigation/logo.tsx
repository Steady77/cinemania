import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import logoImg from '@/assets/images/logo.svg';

const Logo: FC = () => {
  return (
    <Link href="/">
      <a className="px-layout mb-10 block">
        <Image
          src={logoImg}
          width={296}
          height={83}
          alt="Cinemania"
          draggable={false}
        />
      </a>
    </Link>
  );
};
export default Logo;
