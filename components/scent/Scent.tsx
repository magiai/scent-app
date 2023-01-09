import React, { useContext, useState } from 'react'
import styles from './scent.module.css'
import { ScentImage } from './ScentImage'
import { ScentLabel } from './ScentLabel'
import { ScentFamilyContext } from '../scentFamily/scentFamilyDecorator'

interface ScentProps {
    liquidColor: string
    label: string
    latinName: string
    isBasicScent: boolean
}

export const Scent = ({
    liquidColor,
    label,
    latinName,
    isBasicScent,
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
            className = {`${ styles.button } ${ isScentChosen ? styles.chosen : '' } ${ showBasicScents && !isBasicScent ? styles.buttonHidden : '' }`}
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