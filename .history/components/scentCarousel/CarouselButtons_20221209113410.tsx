export const CarouselButtons = () => {

    const onButtonLeftClick = () => {
        xVelocity.current = window.innerWidth - 100;
    }

    const onButtonRightClick = () => {
        xVelocity.current = -window.innerWidth + 100;
    }

    const onButtonDownClick = () => {
        marquee.current.classList.add("open")
        speed.set(0);
    }

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