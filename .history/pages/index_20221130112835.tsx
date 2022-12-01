import Head from 'next/head';
import Layout from '../components/Layout';
import Scent from '../components/scent/Scent';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title key="title">Home</title>
      </Head>

      <Scent 
            // visibleBottle = {true} 
            liquidColor="yellow" 
            label = "Chimonanthus or Wintersweet" />  
      <main>

      </main>

    </Layout>
  )
}
