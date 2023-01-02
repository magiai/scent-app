import styles from './scentCarousel.module.css'
import React, { RefObject, useRef, useImperativeHandle } from "react"

interface CarouselButtonsProps {
    ref: typeof useRef<any>
}

export const CarouselButtonNavigationLeft = ({
    ref
}: CarouselButtonsProps) => {
    const carouselButtonNavigationLeft = useRef(null)

    useImperativeHandle(ref, () => {
        return {
          btnLeft: carouselButtonNavigationLeft.current,
        }
    })

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
