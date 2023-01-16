import React, { useState } from "react"
import styles from './scentCompositionBoard.module.css'
import formStyles from '../form/forms.module.css'
import { removeScent } from '../scentFamily/scent/scentSlice'
import { useAppDispatch } from "../../app/hooks"

interface ICompositionListItem {
    scentId: string,
    scentLabel: string,
}

export const ScentCompositionBoardListItem = ({
    scentId,
    scentLabel
}: ICompositionListItem) => {
    const [proportions, setProportions] = useState({})
    const dispatch = useAppDispatch()
    
    const handleDeleteScent = (scentId) => {
        dispatch(removeScent(scentId))
    }
    
    const handleProportionsChange = (event, scentId) => {
        setProportions(prevProportions => ({
            ...prevProportions,
            [scentId]: event.target.value >= 1 ? event.target.value : 1,
        }))
    }

    return (
        <li className = { styles.listItem } key = { scentId }>
            <span>{ scentLabel }</span>
            <label className = { formStyles.label } htmlFor={`proportion-input-${scentId}`}>
                amount:
            </label>
            <input
                type="number"
                id = { `proportion-input-${scentId}` }
                className = { formStyles.input }
                value = { proportions[scentId] ?? 1 }
                onChange = { event => handleProportionsChange(event, scentId) }
            />
            <button onClick = { () => handleDeleteScent(scentId) }>Delete <i>X</i></button>
        </li>
    )
} 