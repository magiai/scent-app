import React, { Suspense, useState, createContext } from "react"
import styles from './scentFamily.module.css'
import { BasicScentsChoice } from './BasicScentsChoice'
import { Carousel } from '../scentCarousel/Carousel'

interface IScentFamilyDecorator {
    scentFamilyName: string,
    resultsLength: number,
    children: React.ReactNode,
}

export const ScentFamilyContext = createContext(false);

export const ScentFamilyDecorator = ({
    scentFamilyName,
    resultsLength,
    children
}: IScentFamilyDecorator) => {
    const [showBasicScents, setShowBasicScent] = useState(false)
    const scentFamilyContextValue = showBasicScents
    let isOpen = resultsLength > 0 ? true : false;  

    const toggleBasicScents = () => {
        setShowBasicScent(prevShowBasicScents => !prevShowBasicScents)
    }

    return (
        <ScentFamilyContext.Provider value = { scentFamilyContextValue }>
            <details open = { isOpen } className = { styles.details }>
                <summary className = { styles.summary }>
                    <div>
                        <h2>{ scentFamilyName }</h2>
                        <BasicScentsChoice toggleBasicScents = { toggleBasicScents }/>
                    </div>
                </summary>
                <Suspense fallback = {<p>Loading...</p>}>
                    <Carousel>
                        { children }
                    </Carousel>
                </Suspense>
            </details>
        </ScentFamilyContext.Provider>
    )
}