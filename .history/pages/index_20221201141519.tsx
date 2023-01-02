import Head from 'next/head';
import Layout from '../components/Layout';
import { Scent } from '../components/scent/Scent';
import { scentFamiliesData } from '../app/scentFamieliesData';

export default function Home() {
    const scents = scentFamiliesData[0].scents;

    return (
        <Layout>
            <Head>
                <title key="title">Home</title>
            </Head>

            <main>
                {
                    scents.map(scent => {
                        return(
                            <Scent 
                                key = { scent.scentId } 
                                label = { scent.name }
                                latinName = { scent.latinName }
                                liquidColor = { scent.color }
                                isBasic = { scent.isBasic } />  
                        )
                    })
                }
            
            </main>

        </Layout>
    )
}
