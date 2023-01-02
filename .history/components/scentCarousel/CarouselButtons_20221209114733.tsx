import styles from './scentCarousel.module.css'

interface CarouselButtonsProps {
    velocity: number
}

export const CarouselButtonNavigationLeft = ({
    velocity
}: CarouselButtonsProps) => {

    const onButtonLeftClick = () => {
        xVelocity.current = window.innerWidth - 100;
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