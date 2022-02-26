import React from 'react';
import type { AppProps } from 'next/app';

import { global as Global } from '_/styles/global';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Global />
    </>
  );
};

export default MyApp;
