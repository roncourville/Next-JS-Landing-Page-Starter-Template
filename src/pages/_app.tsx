import React, { Component } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from '../layout/Layout';
import '../styles/global.css';
import initFontAwesome from '../utils/initFontAwesome';

initFontAwesome();

export default function App({ Component, pageProps }: { Component: any, pageProps: any }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
