import { Navbar, Image, Switch, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';

export default function NavbarApp() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Navbar isBordered variant='floating'>
      <Navbar.Brand>
        <Image
          src={isDark ? '/docu_logo_md.png' : '/docu_logo_md_dk.png'}
          width={150}
          alt={'Docu logotype'}
        />
      </Navbar.Brand>
      <Navbar.Content hideIn='xs' variant='highlight-rounded'>
        <Navbar.Link isActive href='/'>Home</Navbar.Link>
        <Navbar.Link href='#'>Contact</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
