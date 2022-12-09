import styles from './scentCarousel.module.css'
import React from "react"

interface CarouselButtonNavigationLeftProps {
    onButtonLeftClick: () => void,
}

interface CarouselButtonNavigationRightProps {
    onButtonRightClick: () => void,
}

interface CarouselButtonShowAllProps {
    onButtonShowAllClick: () => void,
}

export const CarouselButtonNavigationLeft = ({
    onButtonLeftClick
}: CarouselButtonNavigationLeftProps) => {

    return (
        <button 
            className = { styles['button--left'] }
            type = "button"
            onClick = { onButtonLeftClick }
            >
            &larr; 
        </button>
    )
}

export const CarouselButtonNavigationRight = ({
    onButtonRightClick
}: CarouselButtonNavigationRightProps) => {

    return (
        <button 
            className = { styles['button--right'] }
            type = "button"
            onClick = { onButtonRightClick }
            >
            &rarr; 
        </button>
    )
}

export const CarouselButtonShowAll = ({
    onButtonShowAllClick
}: CarouselButtonShowAllProps) => {

    return (
        <button 
            className = { styles['button--down'] }
            type = "button"
            onClick = { onButtonShowAllClick }
            >
            &darr; 
        </button>
    )
}


