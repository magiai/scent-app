import styles from './scentCarousel.module.css'
import React from "react"
import { useWindowSize } from "@react-hook/window-size"

interface onHorizontalNavButtonClickProps {
    onHorizontalNavButtonClick: (velocityValue: number) => number,
}

interface CarouselButtonToggleProps {
    onButtonToggleClick: () => void,
}


export const CarouselButtonNavigationLeft = ({
    onHorizontalNavButtonClick
}: onHorizontalNavButtonClickProps) => {
    const [width] = useWindowSize()
    let velocity = width - 100

    return (
        <button 
            className = { styles.buttonLeft }
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
    const [width] = useWindowSize()
    let velocity = -width + 100

    return (
        <button 
            className = { styles.buttonRight }
            type = "button"
            onClick = { (e) => onHorizontalNavButtonClick(velocity)  }
            >
            &rarr; 
        </button>
    )
}

export const CarouselButtonToggle = ({
    onButtonToggleClick
}: CarouselButtonToggleProps) => {
    return (
        <button 
            className = { styles.buttonDown }
            type = "button"
            onClick = { onButtonToggleClick }
            >
            &darr; 
        </button>
    )
}


