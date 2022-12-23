import styles from '../form/forms.module.css'
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
            Only the basic scents
        </label>
    )
}