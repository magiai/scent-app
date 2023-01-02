export const CarouselButtons = () => {

    return (
        <>
        <button className = { styles['button--left'] }
                type = "button"
                onClick = {onButtonLeftClick}> 
                 &larr; 
        </button>
        <button className = { styles['button--right'] }
                type = "button"
                onClick = {onButtonRightClick}> 
                &rarr; 
        </button>
        <button className = { styles['button--down'] }
                type = "button"
                onClick = {onButtonDownClick}> 
                &darr; 
        </button>
        </>
    )
}