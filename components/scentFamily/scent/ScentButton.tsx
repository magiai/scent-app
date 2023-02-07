import React,  { useContext, useMemo } from 'react'
import { ScentFamilyContext } from './../scentFamilyDecorator'
import styles from './scent.module.css'
import { useAppDispatch, useAppSelector } from '../../../app/redux/hooks'
import { selectChosenScents, addChosenScent, removeScent } from '../../../app/redux/slices/scentSlice'

interface IScentButton {
    chosenScentDataForDispach: Array<T>
    isBasicScent: boolean
    children: React.ReactNode
}

export const ScentButton = ({
    chosenScentDataForDispach,
    isBasicScent,
    children
}: IScentButton) => {
    const dispatch = useAppDispatch()
    const selectedScents = useAppSelector(selectChosenScents)
    const [showBasicScents] = useContext(ScentFamilyContext)
    const [liquidColor] = chosenScentDataForDispach

    const isChosen = useMemo(() => {
        const chosenScentsList = Object.values(selectedScents)[0]
        return chosenScentsList.findIndex((scent) => scent.id === liquidColor) !== -1
    }, [selectedScents])

    const handleButtonClick = () => {
        isChosen ? dispatch(removeScent(liquidColor)) : dispatch(addChosenScent(chosenScentDataForDispach))
    }

    return (
        <button
            type="button"
            className = {`${ styles.button } ${ isChosen ? styles.chosen : '' } ${ showBasicScents && !isBasicScent ? styles.buttonHidden : '' }`}
            onClick = { handleButtonClick }>
            { children }
        </button>
    )
}