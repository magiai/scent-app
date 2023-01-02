import styles from './scentCarousel.module.css'
import React, { RefObject, useRef, useImperativeHandle } from "react"

interface CarouselButtonsProps {
    onButtonLeftClick: () => void,
}

export const CarouselButtonNavigationLeft = ({
    onButtonLeftClick
}: CarouselButtonsProps) => {
    // const carouselButtonNavigationLeft = useRef(null)

    // useImperativeHandle(ref, () => {
    //     return {
    //       moveToLeftButton: carouselButtonNavigationLeft.current,
    //     }
    // })

    return (
        <button 
            ref = { carouselButtonNavigationLeft }
            className = { styles['button--left'] }
            type = "button"
            onClick={onButtonLeftClick}
            >
            &larr; 
        </button>
    )
}

// export default React.forwardRef(CarouselButtonNavigationLeft)
