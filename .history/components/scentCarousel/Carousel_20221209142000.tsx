import styles from './scentCarousel.module.css'
import React, { useRef } from "react"
import { motion, useSpring } from "framer-motion"
import normalizeWheel from "normalize-wheel"
import { useRafLoop } from "react-use"
import { CarouselItem } from './CarouselItem'
import { CarouselButtonNavigationLeft, 
        CarouselButtonNavigationRight,
        CarouselButtonShowAll } from './CarouselButtons'

const factor = {
    carouselSpeed: 0.2,
    threshold: 0.014,
    wheelSpeed: 1.5,
    dragSpeed: 1.2
};

interface ICarouselProps {
    children: React.ReactNode,
}

export const InteractiveMarquee = ({
    children
}: ICarouselProps) => {
    const marquee = useRef(null);
    const slowDown = useRef(false);
    const isScrolling = useRef(false);
    const xVelocity = useRef(0);

    const speed = useSpring(factor.carouselSpeed, {
        damping: 10,
        stiffness: 30,
        mass: 8
    });

    const onWheel = (event) => {
        const normalizedScrollDistance = normalizeWheel(event);
        xVelocity.current = normalizedScrollDistance.pixelY * factor.wheelSpeed

        // Reset speed on scroll end
        window.clearTimeout(isScrolling.current)
        isScrolling.current = setTimeout(function () {
            speed.set(factor.carouselSpeed)
        }, 30)
    }

    const onButtonLeftClick = (velocityValue: number) => {
        speed.set(velocityValue);
        // xVelocity.current = velocityValue;
    }

    const onButtonRightClick = () => {
        xVelocity.current = -window.innerWidth + 100;
    }

    const onButtonShowAllClick = () => {
        marquee.current.classList.add("open")
        speed.set(0);
    }

    const onDragStart = (event) => {
        slowDown.current = true
        marquee.current.classList.add("drag")
        speed.set(0);
    }

    const onDrag = (event, info) => {
        speed.set(factor.dragSpeed * -info.delta.x)
    }

    const onDragEnd = (event) => {
        slowDown.current = false
        marquee.current.classList.remove("drag")
        xVelocity.current = factor.carouselSpeed
    }

    const loop = () => {
        //zrobić na useEffect, jeśli carouselSpeed się zmieniejszy, np do zatrzymania ruchu
        if (slowDown.current || Math.abs(xVelocity.current) < factor.threshold) return;
        xVelocity.current *= 0.66
        xVelocity.current < 0 ? xVelocity.current = Math.min(xVelocity.current, 0) : xVelocity.current = Math.max(xVelocity.current, 0)
        speed.set(factor.carouselSpeed + xVelocity.current)
    }

    useRafLoop(loop, true);

    return (
        <>
            <motion.div
                className = { styles['carousel'] }
                ref = { marquee }
                onWheel = { onWheel }
                drag = "x"
                dragConstraints = {{ left: 0, right: 0 }}
                onDragStart = { onDragStart }
                onDrag = { onDrag }
                onDragEnd = { onDragEnd }
                dragElastic = { 0.000001 }
            >
                <CarouselItem content = {children} speed = { speed } />
                <CarouselItem content = { children } speed = { speed } />

                {/* <button className = { styles['button--left'] }
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
                </button> */}
                <CarouselButtonNavigationLeft onButtonLeftClick = { onButtonLeftClick } />
                <CarouselButtonNavigationRight onButtonRightClick = { onButtonRightClick } />
                <CarouselButtonShowAll onButtonShowAllClick = { onButtonShowAllClick } />
            </motion.div>
        </>    
    );
};
