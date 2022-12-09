import React, { useState } from 'react';
import styles from './scent.module.css';
import { ScentImage } from './ScentImage';
import { ScentLabel } from './ScentLabel';

interface ScentProps {
    liquidColor: string;
    label: string;
}

export const Scent = ({
    liquidColor,
    label,
    ...props
}: ScentProps) => {
    //check with useContext
    // const mode: string = visibleBottle ? 'bottle--visible' : 'bottle--hidden';
    const [isScentChosen, setChosenScent] = useState<boolean>(false)

    const handleButtonClick = (event) => {
        // addScentToComposition(label, liquidColor)
        setChosenScent(prevScentState => !prevScentState)
    }

    console.log(isScentChosen)
    const buttonChosenClass = isScentChosen ? 'chosen' : ''
    
    // const handleButtonClick = () => setChosenScent(!isScentChosen)
    // console.log(isScentChosen)

    return (
        <button
            type="button"
            className= {`${styles['button--scent']}  ${isScentChosen ? styles.chosen : ''}`}
            // ${styles[`chosen--${isScentChosen}`]}
            {...props}
            onClick = { handleButtonClick }>

            <ScentImage liquidColor = { liquidColor } />
            <ScentLabel label = { label } />
        </button>
    );
};