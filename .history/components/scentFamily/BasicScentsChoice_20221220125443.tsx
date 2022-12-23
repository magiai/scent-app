import styles from './scentFamily.module.css'
import React from 'react'

interface CarouselButtonToggleProps {
    toggleBasicScents: () => void,
}

export const BasicScentsChoice = ({
    toggleBasicScents
}: CarouselButtonToggleProps) => {

    return (
        <label className = { styles['form-control'] }>
            <input 
                name="basic-scents" 
                type="checkbox" 
                className = { styles['input--checkbox'] }
                onClick = { toggleBasicScents } />
            Show only the basic scents
        </label>
    )
}