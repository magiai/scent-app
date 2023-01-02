import React from "react"
import styles from './scentFamily.module.css'
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
        <section className = { styles['section'] }>
            <h2>{ scentFamilyName }</h2>
            <ul className = { styles['carousel'] }>
                {
                    scents.map(scent => {
                    return(
                        <li>
                            <Scent 
                                key = { scent.scentId } 
                                label = { scent.name }
                                latinName = { scent.latinName }
                                liquidColor = { scent.color }
                                isBasic = { scent.isBasic } />  
                        </li>
                        )
                    })
                }
            </div>
        </section>
    )
}