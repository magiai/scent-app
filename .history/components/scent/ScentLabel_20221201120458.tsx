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
        <>
            <span className={ styles['button--scent__label'] }>{ label }</span>
            <span>{ latinName }</span>
        </>
    );
};