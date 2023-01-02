import styles from './scentCarousel.module.css'
import React, { RefObject, useRef } from "react"

interface CarouselButtonsProps {
    // velocityRef: typeof useRef<any>
}

export const CarouselButtonNavigationLeft = ({
    // velocityRef
}: CarouselButtonsProps) => {
    const carouselButtonNavigationLeft = useRef(null)

    return (
        <button 
            ref = { carouselButtonNavigationLeft }
            className = { styles['button--left'] }
            type = "button"
            >
            &larr; 
        </button>
    )
}

// export default React.forwardRef(CarouselButtonNavigationLeft)
