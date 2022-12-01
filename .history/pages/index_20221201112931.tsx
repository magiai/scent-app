import Head from 'next/head';
import Layout from '../components/Layout';
import { Scent } from '../components/scent/Scent';
import { scentFamiliesData } from '../app/scentFamieliesData';

export default function Home() {
    console.log(scentFamiliesData);
  return (
    <Layout>
      <Head>
        <title key="title">Home</title>
      </Head>

      <main>
        <Scent liquidColor="yellow" 
            label = "Chimonanthus or Wintersweet" />  
        <Scent liquidColor="#e9702c" 
                label = "Grapefruit" />  
        <Scent liquidColor="#9db95d" 
                label = "Lemongrass" />  
      </main>

    </Layout>
  )
}
