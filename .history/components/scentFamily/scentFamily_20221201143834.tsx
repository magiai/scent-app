import React from "react"
import styles from './scent.module.css'
import { Scent } from '../scent/Scent'

interface ScentFamilyProps {
    scentData: Array<any>
}

export const ScentFamily = ({
    scentData,
}: ScentFamilyProps) => {

    const scents = scentData[0].scents;
    return (
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
    )
}