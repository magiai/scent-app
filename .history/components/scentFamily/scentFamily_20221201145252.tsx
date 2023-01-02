import React from "react"
import styles from './scent.module.css'
import { Scent } from '../scent/Scent'

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

    return (
        <div>
            <h2>{ scentFamilyName }</h2>
            <p> {note } </p>
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
        </div>
    )
}