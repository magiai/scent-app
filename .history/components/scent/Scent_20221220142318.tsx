import React, { useContext, useState } from 'react'
import styles from './scent.module.css'
import { ScentImage } from './ScentImage'
import { ScentLabel } from './ScentLabel'
import { ScentFamilyContext } from '../scentFamily/ScentFamily'

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
    const showBasicScents = useContext(ScentFamilyContext)

    const handleButtonClick = (event) => {
        // addScentToComposition(label, liquidColor)
        setChosenScent(prevScentState => !prevScentState)
    }

    return (
        <button
            type="button"
            className = {`${styles['button--scent']} ${isScentChosen ? styles.chosen : ''} ${showBasicScents && !isBasic ? styles.buttonHidden : ''}`}
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