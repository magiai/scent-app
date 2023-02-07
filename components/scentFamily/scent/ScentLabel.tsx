import React from 'react';
import styles from './scent.module.css';

interface ScentLabelProps {
    label: string;
    latinName: string;
}

export const ScentLabel = ({
    label,
    latinName
}: ScentLabelProps) => {

    return (
        <figcaption className={ styles.figcaption }>
            <span>{ label }</span>
            <i>{ latinName }</i>
        </figcaption>
    );
};