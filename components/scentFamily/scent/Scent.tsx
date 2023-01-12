import React, { useContext, useState } from 'react'
import styles from './scent.module.css'
import { ScentImage } from './ScentImage'
import { ScentLabel } from './ScentLabel'
import { ScentFamilyContext } from '../ScentFamilyDecorator'
import { addChosenScent } from './scentSlice'
import { useAppDispatch } from '../../../app/hooks'

interface IScentProps {
    liquidColor: string
    label: string
    latinName: string
    note: string
    isBasicScent: boolean
}

export const Scent = ({
    liquidColor,
    label,
    latinName,
    note,
    isBasicScent,
    ...props
}: IScentProps) => {
    const [isScentChosen, setChosenScent] = useState<boolean>(false)
    const showBasicScents = useContext(ScentFamilyContext)
    const dispatch = useAppDispatch()
    let proportion = 1
    const chosenScentData = [liquidColor ,note, label, proportion]

    const handleButtonClick = (event) => {
        dispatch(addChosenScent(chosenScentData))
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