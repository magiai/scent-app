import React, { useState } from "react"
import styles from './scentCompositionBoard.module.css'
import formStyles from '../form/forms.module.css'
import { removeScent } from '../../app/redux/slices/scentSlice'
import { useAppDispatch } from "../../app/redux/hooks"

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
        <li className = { styles.listItem }>
            <span>{ scentLabel }</span>
            <div className = { styles.proportions }>
                <input
                    type="number"
                    id = { `proportion-input-${scentId}` }
                    className = { formStyles.input }
                    value = { proportions[scentId] ?? 1 }
                    onChange = { event => handleProportionsChange(event, scentId) }
                    />
                <label className = { formStyles.label } htmlFor={`proportion-input-${scentId}`}>
                    ml
                </label>
            </div>
            <button className = 'button--delete' onClick = { () => handleDeleteScent(scentId) }>
                <i className = 'icon--close' >x</i> Delete
            </button>
        </li>
    )
} 