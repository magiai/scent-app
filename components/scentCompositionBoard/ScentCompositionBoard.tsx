import React, { useState } from "react"
import styles from './scentCompositionBoard.module.css'
import formStyles from '../form/forms.module.css'
import { useAppSelector } from "../../app/hooks"
import { selectChosenScents } from '../scentFamily/scent/scentSlice'
import { removeScent } from '../scentFamily/scent/scentSlice'
import { useAppDispatch } from "../../app/hooks"

export const ScentCompositionBoard = (): JSX.Element => {
    const [proportions, setProportions] = useState({});
    const selectedScents = useAppSelector(selectChosenScents);
    const dispatch = useAppDispatch()
    const chosenScents = Object.values(selectedScents)[0];

    const handleDeleteScent = (id) => {
        dispatch(removeScent(id))
    }

    const handleProportionsChange = (event, scentId) => {
        setProportions(prevProportions => ({
            ...prevProportions,
            [scentId]: event.target.value >= 1 ? event.target.value : 1,
            // event.target.value >= 1 ? setProportionValue(event.target.value) : setProportionValue(1)
        }))
    }

    return (
        <>
            <aside className={styles.aside}>
                <h2>Scent composition</h2>

                <h3>Top notes:</h3>
                <ul>
                    {
                        chosenScents?.map(scent => {
                            if (scent.note === "top") {
                                return (
                                    <li className={styles.listItem} key={scent.id}>
                                        {scent.label}
                                        <label className={formStyles.label} htmlFor={`proportion-input-${scent.id}`}>
                                            , amount:
                                        </label>
                                        <input
                                            type="number"
                                            id={`proportion-input-${scent.id}`}
                                            className={ formStyles.input }
                                            value={ proportions[scent.id] ?? 1 }
                                            onChange={ event => handleProportionsChange(event, scent.id) }
                                        />
                                        <button onClick = { () => handleDeleteScent(scent.id) }>Delete <i>X</i></button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>

                <h3>Middle notes:</h3>
                <ul>
                    {
                        chosenScents?.map(scent => {
                            if (scent.note === "middle") {
                                return (
                                    <li className={styles.listItem} key={scent.id}>
                                        {scent.label}
                                        <label className={formStyles.label} htmlFor={`proportion-input-${scent.id}`}>
                                            , amount:
                                        </label>
                                        <input
                                            type="number"
                                            id={`proportion-input-${scent.id}`}
                                            className={ formStyles.input }
                                            value={ proportions[scent.id] ?? 1 }
                                            onChange={ event => handleProportionsChange(event, scent.id) }
                                        />
                                        <button onClick = { () => handleDeleteScent(scent.id) }>Delete <i>X</i></button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>    

                <h3>Base notes:</h3>
                <ul>
                    {
                        chosenScents?.map(scent => {
                            if (scent.note === "base") {
                                return (
                                    <li className={styles.listItem} key={scent.id}>
                                        {scent.label}
                                        <label className={formStyles.label} htmlFor={`proportion-input-${scent.id}`}>
                                            , amount:
                                        </label>
                                        <input
                                            type="number"
                                            id={`proportion-input-${scent.id}`}
                                            className={ formStyles.input }
                                            value={ proportions[scent.id] ?? 1 }
                                            onChange={ event => handleProportionsChange(event, scent.id) }
                                        />
                                        <button onClick = { () => handleDeleteScent(scent.id) }>Delete <i>X</i></button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>    

            </aside>
        </>
    )
}

