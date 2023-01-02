import styles from './scentFamily.module.css'
import React, { useState, createContext } from 'react'

export const BasicScentsContext = createContext(false); 

export const BasicScentsChoice = ({

}) => {
    const [showBasicScents, setShowBasicScent] = useState(false)
    const basicScentsContextValue = showBasicScents

    const toggleBasicScents = () => {
        setShowBasicScent(prevShowBasicScents => !prevShowBasicScents)
    }

    return (
        <BasicScentsContext.Provider value = {basicScentsContextValue}>
            <input type="radio"
            onClick = { toggleBasicScents } />
        </BasicScentsContext.Provider>
    )
}