export const CarouselButtonNavigationLeft = 
    <button className = "button--left"
        type = "button">
        &larr; 
    </button>

    return (
        <>
     
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