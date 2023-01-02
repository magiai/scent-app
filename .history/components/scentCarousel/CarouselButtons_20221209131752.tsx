import styles from './scentCarousel.module.css'
import React, { RefObject, useRef } from "react"

interface CarouselButtonsProps {
    // velocityRef: typeof useRef<any>
}

export const CarouselButtonNavigationLeft = ({
    // velocityRef
}: CarouselButtonsProps) => {

    const onButtonLeftClick = () => {
        // velocityRef = window.innerWidth - 100;
    }

    return (
        <button 
            className = { styles['button--left'] }
            type = "button"
            >
            &larr; 
        </button>
    )
}

// export default React.forwardRef(CarouselButtonNavigationLeft)
