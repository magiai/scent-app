import React, { useContext, useState } from 'react'
import styles from './scent.module.css'
import { ScentImage } from './scentImage/ScentImage'
import { ScentLabel } from './ScentLabel'
import { ScentFamilyContext } from './../scentFamilyDecorator'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectChosenScents, addChosenScent, removeScent } from './scentSlice'

interface IScentProps {
    liquidColor: string
    liquidColorSecond: string
    label: string
    latinName: string
    note: string
    isBasicScent: boolean
}

export const Scent = ({
    liquidColor,
    liquidColorSecond,
    label,
    latinName,
    note,
    isBasicScent,
    ...props
}: IScentProps) => {
    const [showBasicScents, scentFamilyName] = useContext(ScentFamilyContext)
    const dispatch = useAppDispatch()
    const selectedScents = useAppSelector(selectChosenScents)
    const chosenScentsList = Object.values(selectedScents)[0]
    let proportion = 1
    const chosenScentDataForDispach = [liquidColor ,note, label, proportion]
    const isChosen = chosenScentsList.findIndex((scent) => scent.id === liquidColor) !== -1

    const handleButtonClick = () => {
        isChosen ? dispatch(removeScent(liquidColor)) : dispatch(addChosenScent(chosenScentDataForDispach))
    }

    return (
        <button
            type="button"
            className = {`${ styles.button } ${ isChosen ? styles.chosen : '' } ${ showBasicScents && !isBasicScent ? styles.buttonHidden : '' }`}
            onClick = { handleButtonClick }
            {...props}>

            <ScentImage liquidColor = { liquidColor } liquidColorSecond ={ liquidColorSecond } scentFamilyName = { scentFamilyName }/>
            <ScentLabel 
                label = { label } 
                latinName = { latinName }
            />
        </button>
    );
};