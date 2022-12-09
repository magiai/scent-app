import React, { useState } from 'react'
import styles from './scent.module.css'
import { ScentImage } from './ScentImage'
import { ScentLabel } from './ScentLabel'

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

    const handleButtonClick = (event) => {
        // addScentToComposition(label, liquidColor)
        setChosenScent(prevScentState => !prevScentState)
    }

    return (
        <li>
            <button
                type="button"
                className = {`${styles['button--scent']} ${isScentChosen ? styles.chosen : ''}`}
                {...props}
                onClick = { handleButtonClick }>

                <ScentImage liquidColor = { liquidColor } />
                <ScentLabel 
                    label = { label } 
                    latinName = { latinName }
                />
            </button>
        </li>
    );
};