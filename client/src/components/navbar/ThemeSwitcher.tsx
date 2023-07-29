import { FC } from 'react';
import { Switch, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';

const ThemeSwitcher: FC = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Switch
      checked={isDark}
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
    />
  );
};

export default ThemeSwitcher;
