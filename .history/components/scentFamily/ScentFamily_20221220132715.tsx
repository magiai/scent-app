import React, { createContext, Suspense, useState } from "react"
import styles from './scentFamily.module.css'
import { Scent } from '../scent/Scent'
import { InteractiveMarquee } from '../scentCarousel/Carousel'
import { BasicScentsChoice } from './BasicScentsChoice'

export const ScentFamilyContext = createContext(false);

interface ScentFamilyProps {
    scentFamilyName: string
    note: string
    scents: Array<any>
}

export const ScentFamily = ({
    scentFamilyName,
    note,
    scents,
}: ScentFamilyProps) => {
    const [showBasicScents, setShowBasicScent] = useState(false)
    const scentFamilyContextValues = showBasicScents

    const toggleBasicScents = () => {
        setShowBasicScent(prevShowBasicScents => !prevShowBasicScents)
    }

    return (
        <ScentFamilyContext.Provider value = { scentFamilyContextValues }>
            <section className = { styles.section }>
                <header className = {styles.header}>
                    <BasicScentsChoice toggleBasicScents = { toggleBasicScents }/>
                    <h2>{ scentFamilyName }</h2>
                </header>
                <Suspense fallback = {<p>Loading...</p>}>
                    <InteractiveMarquee>
                        {
                            scents.map(scent => {
                            return(
                                <li key = { scent.scentId } >
                                    <Scent 
                                        label = { scent.name }
                                        latinName = { scent.latinName }
                                        liquidColor = { scent.color }
                                        isBasic = { scent.isBasic } />  
                                </li>
                                )
                            })
                        }
                    </InteractiveMarquee>
                </Suspense>
            </section>
        </ScentFamilyContext.Provider>
    )
}