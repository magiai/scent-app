import React from "react"
import Head from 'next/head'
import Layout from '../components/Layout'
import { ScentFamily } from '../components/scentFamily/ScentFamily'
import { scentFamiliesData } from '../app/scentFamieliesData'
import SearchEngine from "../components/search/SearchEngine"

export default function Home() {

    return (
        <Layout>
            <Head>
                <title key="title">Home</title>
            </Head>

            <main>
                <SearchEngine />
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
