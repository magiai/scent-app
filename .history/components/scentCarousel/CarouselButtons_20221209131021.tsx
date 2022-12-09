import styles from './scentCarousel.module.css'
import React, { RefObject, useRef } from "react"

interface CarouselButtonsProps {
    props: any,
    // velocityRef: typeof useRef<any>
}

export const CarouselButtonNavigationLeft = ({
    props
    // velocityRef
}: CarouselButtonsProps) => {

    const onButtonLeftClick = () => {
        // velocityRef = window.innerWidth - 100;
    }

    return (
        <button 
            className = { styles['button--left'] }
            type = "button"
            // onClick = { onButtonLeftClick }
            {...props }
            >
            &larr; 
        </button>
    )
}

// export default React.forwardRef(CarouselButtonNavigationLeft)
