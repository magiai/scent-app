import Head from 'next/head';
import Layout from '../components/Layout';
import { Scent } from '../components/scent/Scent';
import { scentFamiliesData } from '../app/scentFamieliesData';

export default function Home() {
    const scents = scentFamiliesData[0].scents;
    console.log(scents);

    return (
        <Layout>
        <Head>
            <title key="title">Home</title>
        </Head>

        <main>
            <Scent liquidColor="yellow" 
                label = "Chimonanthus or Wintersweet"
                isBasic = {false} />  
        
        </main>

        </Layout>
    )
}
