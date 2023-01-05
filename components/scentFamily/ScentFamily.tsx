import React, { createContext, Suspense, useState } from "react"
import styles from './scentFamily.module.css'
import { Scent } from '../scent/Scent'
import { Carousel } from '../scentCarousel/Carousel'
import { BasicScentsChoice } from './BasicScentsChoice'
import { useAppSelector } from '../../app/hooks';
import { selectSearch } from "../../components/search/searchSlice";

export const ScentFamilyContext = createContext(false);

interface IScentFamilyProps {
    scentFamilyName: string
    note: string
    scents: Array<any>
}

export const ScentFamily = ({
    scentFamilyName,
    note,
    scents,
}: IScentFamilyProps) => {
    const [showBasicScents, setShowBasicScent] = useState(false)
    const scentFamilyContextValues = showBasicScents
    const selectPhrase = useAppSelector(selectSearch);
    let results = [] 
 

    const toggleBasicScents = () => {
        setShowBasicScent(prevShowBasicScents => !prevShowBasicScents)
    }

    const filterScents = () => {
        const filteredScents = scents.filter(scent => {
            const scentPopularName = scent.name.toLowerCase().includes(selectPhrase.toLowerCase())
            const scentLatinName = scent.latinName.toLowerCase().includes(selectPhrase.toLowerCase())
            return scentPopularName || scentLatinName
        })
        return filteredScents
    }

    results = selectPhrase === '' ?  scents : filterScents()
    let isOpen = results.length > 0 ? true : false;  

    return (
        <ScentFamilyContext.Provider value = { scentFamilyContextValues }>
            <details open = { isOpen } className = { styles.details }>
                <summary className = { styles.summary }>
                    <div>
                        <h2>{ scentFamilyName }</h2>
                        <BasicScentsChoice toggleBasicScents = { toggleBasicScents }/>
                    </div>
                </summary>
                <Suspense fallback = {<p>Loading...</p>}>
                    <Carousel>
                        {
                            results.map(scent => {
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
                    </Carousel>
                </Suspense>
            </details>
        </ScentFamilyContext.Provider>
    )
}