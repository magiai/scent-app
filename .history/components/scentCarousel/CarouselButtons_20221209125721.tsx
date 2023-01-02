import styles from './scentCarousel.module.css'
import React, { RefObject, useRef } from "react"

interface CarouselButtonsProps {
    // props: any,
    ref: typeof useRef<number>
}

const CarouselButtonNavigationLeft = ({
    // props,
    ref
}: CarouselButtonsProps) => {

    const onButtonLeftClick = () => {
        ref.current = window.innerWidth - 100;
    }

    return (
        <button 
            className = { styles['button--left'] }
            type = "button"
            onClick = { onButtonLeftClick }
            // {...props }
            >
            &larr; 
        </button>
    )
}

export default React.forwardRef(CarouselButtonNavigationLeft)
