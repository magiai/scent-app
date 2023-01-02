import styles from './scentCarousel.module.css'
import React, { RefObject, useRef, useImperativeHandle } from "react"

interface CarouselButtonsProps {
    // velocityRef: typeof useRef<any>
}



export const CarouselButtonNavigationLeft = ({
    // velocityRef
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
