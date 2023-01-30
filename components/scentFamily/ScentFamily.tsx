import React from "react"
import { Scent } from './scent/Scent'
import { ScentFamilyDecorator } from './scentFamilyDecorator'
import { useAppSelector } from '../../app/redux/hooks';
import { selectSearch } from "../../app/redux/slices/searchSlice";
import { selectIsLchModelSupported } from "../../app/redux/slices/colorModelSlice";

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
    const isLchSupported = useAppSelector(selectIsLchModelSupported).isLchSupported;

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
                                liquidColor = { isLchSupported ? scent.color : scent.colorFallback }
                                liquidColorSecond = { scent.colorSecond ? 
                                                        isLchSupported ? scent.colorSecond : scent.colorSecondFallback 
                                                        : null
                                                    }
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