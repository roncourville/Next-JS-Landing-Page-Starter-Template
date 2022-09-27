import React from 'react';
//import { Container } from 'reactstrap';
import Head from 'next/head';

// import NavBar from './NavBar';
// import Footer from './Footer';
import {TopNav} from './TopNav';

import { AppConfig } from '../utils/AppConfig';
import { Meta } from '../layout/Meta';
import { Footer } from '../templates/Footer';
import { ImageHero } from '../hero/ImageHero';

  // <>
    
  //   <main id="app">
  //   <Meta title={AppConfig.title} description={AppConfig.description} />
  //     <TopNav/>
  //     {/* <NavBar />
  //     <Container className="flex-grow-1 mt-5">{children}</Container> */}
  //     {children}
  //     {/* <Footer /> */}
  //   </main>
  // </>

const Layout = ({ children }) => (
  <>
  <Head>
      <title>Pathways React-Nextjs POC</title>
      {/* <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css" /> */}
      
    </Head>
  <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <TopNav />
      <ImageHero
        title='There are many ways to live with breast cancer. Each woman will make her own choices and walk her own path.'
        description='Hello world'
        button={(<button>test</button>)}
      />
      {children}
      <Footer />
    </div>
  </>
);

export default Layout;
