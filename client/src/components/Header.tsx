import { Container, Image, Row, Spacer, Button, Switch, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';

const Header = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Container xl>
      <Row justify='space-between' align='center'>
        <Image
          src='/docu_logo_md.png'
          width={150}
          alt={'Docu logotype'}
        />
        <Spacer x={0.5} />
        <Row justify={'flex-end'} align='flex-end'>
          <Button size='sm' flat color='secondary' auto href='/'>
            Home
          </Button>
          <Spacer x={0.5} />
          <Button flat color='secondary' auto size='sm' href='/#'>
            Contact
          </Button>
          <Spacer x={0.5} />
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          />
        </Row>
      </Row>
    </Container>
  );
};

export default Header;
