import React from "react"
import { Scent } from './scent/Scent'
import { ScentFamilyDecorator } from "./ScentFamilyDecorator"
import { useAppSelector } from '../../app/hooks';
import { selectSearch } from "../../components/search/searchSlice";

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
    const searchedPhrase = useAppSelector(selectSearch);
    let results = [] 

    const filterScents = () => {
        const filteredScents = scents.filter(scent => {
            const scentPopularName = scent.name.toLowerCase().includes(searchedPhrase.toLowerCase())
            const scentLatinName = scent.latinName.toLowerCase().includes(searchedPhrase.toLowerCase())
            return scentPopularName || scentLatinName
        })
        return filteredScents
    }

    results = searchedPhrase === '' ?  scents : filterScents()

    return (
        <ScentFamilyDecorator
            scentFamilyName = { scentFamilyName }
            resultsLength = { results.length }
        >
            {
                results.map(scent => {
                    return(
                        <li key = { scent.scentId } >
                            <Scent 
                                label = { scent.name }
                                latinName = { scent.latinName }
                                liquidColor = { scent.color }
                                note = { note }
                                isBasicScent = { scent.isBasic }
                            />  
                        </li>
                    )
                })
            }
        </ScentFamilyDecorator>
    )
}