import Head from 'next/head';
import type {AppProps} from 'next/app';
import { MantineProvider } from '@mantine/core';
import {AuthProvider} from '../features/auth';
import {Header} from '../features/layout';
import '../styles/globals.css';


function MyApp({Component, pageProps}: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthProvider>
        <Head>
          <title>Alertmoon</title>
          <meta name="description" content="Приложение, которое позволит видеть нотификации среди всех ваших устройств" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Component {...pageProps} />
      </AuthProvider>
    </MantineProvider>
  );
}

export default MyApp;
