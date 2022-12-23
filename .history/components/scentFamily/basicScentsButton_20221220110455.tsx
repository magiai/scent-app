import styles from './scentFamily.module.css'
import React, { useState } from 'react'


export const BasicScentsButton = ({

}) => {
    const [showBasicScents, setShowBasicScent] = useState(false)
    const scentFamilyContextProvider = showBasicScents

    return (
        <input type="radio"
        onClick = {} />
    )
}