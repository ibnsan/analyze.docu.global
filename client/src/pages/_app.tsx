import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import NavbarApp from '@/components/navbar/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  const lightTheme = createTheme({
    type: 'light',
    theme: {},
  });

  const darkTheme = createTheme({
    type: 'dark',
    theme: {},
  });

  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}>
      <NextUIProvider>
        <NavbarApp />
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>);
}
