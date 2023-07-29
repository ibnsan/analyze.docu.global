import { FC } from 'react';
import { Navbar } from '@nextui-org/react';

const NavbarLinks: FC = () => (
  <Navbar.Content hideIn='xs' variant='highlight-rounded'>
    <Navbar.Link isActive href='/'>Home</Navbar.Link>
    <Navbar.Link href='#'>Contact</Navbar.Link>
  </Navbar.Content>
);

export default NavbarLinks;
