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
        <h3 className={ styles['button--scent__label'] }>
            <span>{ label }</span>
            <i>{ latinName }</i>
        </h3>
    );
};