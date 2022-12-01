import React from 'react';
import styles from './styles/scent.module.css';

interface ScentLabelProps {
    label: string;
}

export const ScentLabel = ({
    label
}: ScentLabelProps) => {

    return (
        <span className={ styles['button--svg__label'] }>{ label }</span>
    );
};