import React, { useContext, useState } from 'react'
import styles from './scent.module.css'
import { ScentImage } from './ScentImage'
import { ScentLabel } from './ScentLabel'
import { BasicScentsContext } from '../scentFamily/BasicScentsChoice'

interface ScentProps {
    liquidColor: string
    label: string
    latinName: string
    isBasic: boolean
}

export const Scent = ({
    liquidColor,
    label,
    latinName,
    isBasic,
    ...props
}: ScentProps) => {
    const [isScentChosen, setChosenScent] = useState<boolean>(false)
    const showBasicScents = useContext(BasicScentsContext)

    const handleButtonClick = (event) => {
        // addScentToComposition(label, liquidColor)
        setChosenScent(prevScentState => !prevScentState)
    }

    console.log(showBasicScents)

    return (
        <button
            type="button"
            className = {`${styles['button--scent']} ${isScentChosen ? styles.chosen : ''}`}
            onClick = { handleButtonClick }
            {...props}>

            <ScentImage liquidColor = { liquidColor } />
            <ScentLabel 
                label = { label } 
                latinName = { latinName }
            />
        </button>
    );
};