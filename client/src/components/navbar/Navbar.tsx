import { FC } from 'react';
import { Navbar } from '@nextui-org/react';
import NavbarBrand from './NavbarBrand';
import NavbarLinks from './NavbarLinks';
import ThemeSwitcher from './ThemeSwitcher';

const NavbarApp: FC = () => (
  <Navbar isBordered variant='floating'>
    <Navbar.Brand>
      <NavbarBrand />
    </Navbar.Brand>
    <NavbarLinks />
    <Navbar.Content>
      <Navbar.Item>
        <ThemeSwitcher />
      </Navbar.Item>
    </Navbar.Content>
  </Navbar>
);

export default NavbarApp;
