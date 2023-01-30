import React, { useEffect, startTransition } from "react"
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import styles from './pages.module.css'
import { ScentFamily } from '../components/scentFamily/ScentFamily'
import { scentFamiliesData } from '../app/scentFamieliesData'
import SearchEngine from "../components/search/SearchEngine"
import { ScentCompositionBoard } from "../components/scentCompositionBoard/ScentCompositionBoard"
import { useAppDispatch } from "./../app/redux/hooks"
import { setIsLchColorModelSupported } from './../app/redux/slices/colorModelSlice'
import { useIsLchColorModelSupported } from './../app/hooks/useIsLchColorModelSupported'

export default function Home() {
    const dispatch = useAppDispatch()
    const isLchSupported = useIsLchColorModelSupported()
    
    startTransition(() => {
        dispatch(setIsLchColorModelSupported(isLchSupported))
    })

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
                <ScentCompositionBoard />
            </main>

        </Layout>
    )
}
