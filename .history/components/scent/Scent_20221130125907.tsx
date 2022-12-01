import React from 'react';
import styles from './styles/scent.module.css';
import { ScentImage } from './ScentImage';

interface ScentProps {
    liquidColor: string;
    label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Scent = ({
    liquidColor,
    label,
    ...props
}: ScentProps) => {
    //check with useContext
    // const mode: string = visibleBottle ? 'bottle--visible' : 'bottle--hidden';

    return (
    <>
        <button
            type="button"
            className={ styles['button--scent'] }
            {...props}>

            <ScentImage liquidColor = { liquidColor } />

            <span className={ styles['button--svg__label'] }>{ label }</span>
        </button>
    </>
    );
};