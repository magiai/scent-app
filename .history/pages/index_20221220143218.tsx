import React, { useDeferredValue } from "react"
import Head from 'next/head';
import Layout from '../components/Layout';
import { ScentFamily } from '../components/scentFamily/ScentFamily';
import { scentFamiliesData } from '../app/scentFamieliesData';

export default function Home() {

    console.log(scentFamiliesData)

    // users.sort(function(a, b){
    //     if(a.firstname < b.firstname) { return -1; }
    //     if(a.firstname > b.firstname) { return 1; }
    //     return 0;
    // })

    // const defferedScentFamiliesData = useDeferredValue(() => {
    //     scentFamiliesData.sort((a, b) => return a > b))
    // }, [scentFamiliesData]);

    return (
        <Layout>
            <Head>
                <title key="title">Home</title>
            </Head>

            <main>
                {
                    scentFamiliesData.map(scentFamily => {
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
            </main>

        </Layout>
    )
}
