import styles from './scentCarousel.module.css'
import React, { RefObject, useRef } from "react"

interface CarouselButtonsProps {
    props: any,
    ref: typeof useRef<number>
}

const CarouselButtonNavigationLeft = ({
    props,
    ref
}: CarouselButtonsProps) => {

    const onButtonLeftClick = () => {
        ref.current = window.innerWidth - 100;
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

export default React.forwardRef(CarouselButtonNavigationLeft)

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