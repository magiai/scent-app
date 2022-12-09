import styles from './scentCarousel.module.css'
import React from "react"

interface onHorizontalNavButtonClickProps {
    onHorizontalNavButtonClick: (velocityValue: number) => number,
}

// interface CarouselButtonNavigationRightProps {
//     onButtonRightClick: () => void,
// }

interface CarouselButtonShowAllProps {
    onButtonShowAllClick: () => void,
}

export const CarouselButtonNavigationLeft = ({
    onHorizontalNavButtonClick
}: onHorizontalNavButtonClickProps) => {
    let velocity = window?.innerWidth - 100
    return (
        <button 
            className = { styles['button--left'] }
            type = "button"
            onClick = { (e) => onHorizontalNavButtonClick(velocity) }
            >
            &larr; 
        </button>
    )
}

export const CarouselButtonNavigationRight = ({
    onHorizontalNavButtonClick
}: onHorizontalNavButtonClickProps) => {
    let velocity = -window?.innerWidth + 100
    return (
        <button 
            className = { styles['button--right'] }
            type = "button"
            onClick = { (e) => onHorizontalNavButtonClick(velocity)  }
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


