import styles from '../form/forms.module.css'
import React from 'react'

interface ICarouselButtonToggleProps {
    toggleBasicScents: () => void,
}

export const BasicScentsChoice = ({
    toggleBasicScents
}: ICarouselButtonToggleProps) => {

    return (
        <label className = { styles['form-control'] }>
            <input 
                name="basic-scents" 
                type="checkbox" 
                className = { styles['input--checkbox'] }
                onClick = { toggleBasicScents } />
            basic scents only
        </label>
    )
}