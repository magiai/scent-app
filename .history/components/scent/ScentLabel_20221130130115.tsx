import React from 'react';
import styles from './styles/scent__image.module.css';

interface ScentLabelProps {
    label: string;
}

export const ScentLabel = ({
    label
}: ScentLabelProps) => {
    //check with useContext
    // const mode: string = visibleBottle ? 'bottle--visible' : 'bottle--hidden';

    return (
        <span className={ styles['button--svg__label'] }>{ label }</span>
    );
};