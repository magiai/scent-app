import Head from 'next/head';
import Layout from '../components/Layout';
import { ScentFamily } from '../components/scentFamily/scentFamily';
import { scentFamiliesData } from '../app/scentFamieliesData';

export default function Home() {
    console.log(scentFamiliesData)
  

    return (
        <Layout>
            <Head>
                <title key="title">Home</title>
            </Head>

            <main>
                {
                    scentFamiliesData.map(scentFamily => {
                        console.log(scentFamily)
                        return (
                                <ScentFamily 
                                    key = {scentFamily.scentFamilyId} 
                                    scentFamilyName = { scentFamily.name } 
                                    note = { scentFamily.note }
                                    scents = { scentFamily.scents }
                                />
                        )
                    })

                }
                {/* {
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
                } */}
            
            </main>

        </Layout>
    )
}
