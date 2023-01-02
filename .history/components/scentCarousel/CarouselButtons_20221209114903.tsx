import styles from './scentCarousel.module.css'
import React, { RefObject, useRef } from "react"

interface CarouselButtonsProps {
    velocity: RefObject<number>
}

export const CarouselButtonNavigationLeft = ({
    velocity
}: CarouselButtonsProps) => {

    const onButtonLeftClick = () => {
        velocity.current = window.innerWidth - 100;
    }

    return (
        <button 
            className = { styles['button--left'] }
            type = "button"
            onClick = { onButtonLeftClick }>
            &larr; 
        </button>
    )
}

//     return (
//         <>
     
//         <button className = { styles['button--right'] }
//                 type = "button"
//                 onClick = {onButtonRightClick}> 
//                 &rarr; 
//         </button>
//         <button className = { styles['button--down'] }
//                 type = "button"
//                 onClick = {onButtonDownClick}> 
//                 &darr; 
//         </button>
//         </>
//     )
// }