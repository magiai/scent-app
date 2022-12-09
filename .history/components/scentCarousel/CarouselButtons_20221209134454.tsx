import styles from './scentCarousel.module.css'
import React from "react"

interface CarouselButtonsProps {
    onButtonLeftClick: () => void,
}

export const CarouselButtonNavigationLeft = ({
    onButtonLeftClick
}: CarouselButtonsProps) => {

    return (
        <button 
            className = { styles['button--left'] }
            type = "button"
            onClick={onButtonLeftClick}
            >
            &larr; 
        </button>
    )
}

// export default React.forwardRef(CarouselButtonNavigationLeft)
