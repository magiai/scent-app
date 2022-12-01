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
        <div className={ styles['button--scent__label'] }>
            { label }
            <i>{ latinName }</i>
        </div>
    );
};