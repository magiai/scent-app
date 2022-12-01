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
    const [isScentChosen, setChosenScent] = useState<boolean>(false);
    const handleButtonClick = () => {
        // addScentToComposition(label, liquidColor)
        setChosenScent(!isScentChosen)
    }

    return (
        <button
            type="button"
            className={ styles[`button--scent ${isScentChosen ? 'chosen' : ''}`] }
            {...props}
            onClick = { handleButtonClick }>

            <ScentImage liquidColor = { liquidColor } />
            <ScentLabel label = { label } />
        </button>
    );
};