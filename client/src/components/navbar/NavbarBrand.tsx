import { FC } from 'react';
import { Image, useTheme } from '@nextui-org/react';

const NavbarBrand: FC = () => {
  const { isDark } = useTheme();

  return (
    <Image
      src={isDark ? '/docu_logo_md.png' : '/docu_logo_md_dk.png'}
      width={150}
      alt={'Docu logotype'}
    />
  );
};

export default NavbarBrand;
