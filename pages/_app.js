import '../styles/globals.css'
import Layout from '../components/Layout'

import dynamic from "next/dynamic";
import React from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </>
//     )
// }

// export default MyApp
