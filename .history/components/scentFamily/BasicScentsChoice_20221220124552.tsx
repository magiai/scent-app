import styles from './scentFamily.module.css'
import React from 'react'

interface CarouselButtonToggleProps {
    toggleBasicScents: () => void,
}

export const BasicScentsChoice = ({
    toggleBasicScents
}: CarouselButtonToggleProps) => {

    return (
            <input type="checkbox"
            id="basic-scents"
            name="basic-scents"
            onClick = { toggleBasicScents } />
            <label>Show only the basic scents</label>
    )
}