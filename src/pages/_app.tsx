import React, { Component } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from '../layout/Layout';
import '../styles/global.css';
import initFontAwesome from '../utils/initFontAwesome';
import {
  QueryClientProvider,
  QueryClient

} from "@tanstack/react-query";
initFontAwesome();
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: { Component: any, pageProps: any }) {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </UserProvider>
  );
}
