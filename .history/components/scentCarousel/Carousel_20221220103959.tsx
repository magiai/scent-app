import styles from './scentCarousel.module.css'
import React, { createContext, useEffect, useRef, useState } from "react"
import { motion, useSpring, useReducedMotion } from "framer-motion"
import normalizeWheel from "normalize-wheel"
import { useRafLoop } from "react-use"
import { CarouselList } from './CarouselList'
import { CarouselButtonNavigationLeft, 
        CarouselButtonNavigationRight,
        CarouselButtonToggle } from './CarouselButtons'



export const CarouselContext = createContext(false);

interface ICarouselProps {
    children: React.ReactNode,
}

export const InteractiveMarquee = ({
    children
}: ICarouselProps) => {
    const marquee = useRef(null)
    const slowDown = useRef(false)
    const xVelocity = useRef(0)
    const [isCarouselExpanded, setCarouselIsExpanded] = useState(false)
    const prefersReducedMotion = useReducedMotion()
    
    const factor = {
        carouselSpeed: prefersReducedMotion ? 0 : 0.2,
        threshold: 0.014,
        wheelSpeed: 1.5,
        dragSpeed: 1.2
    };

    const speed = useSpring(factor.carouselSpeed, {
        damping: 10,
        stiffness: 30,
        mass: 8
    });

    const onWheel = (event) => {
        if (isCarouselExpanded) return; 
        const normalizedScrollDistance = normalizeWheel(event);
        xVelocity.current = normalizedScrollDistance.pixelY * factor.wheelSpeed
    }

    const onHorizontalNavButtonClick = (velocityValue: number) => {
        xVelocity.current = velocityValue;
        return xVelocity.current
    }

    const onButtonToggleClick = () => {
        setCarouselIsExpanded(prevCarouselState => !prevCarouselState)
    }

    useEffect(() => {
        isCarouselExpanded ? speed.set(0) : speed.set(factor.carouselSpeed);
    }, [isCarouselExpanded])

    const onDragStart = (event) => {
        if (prefersReducedMotion) return 
        slowDown.current = true
        marquee.current.classList.add("drag")
        speed.set(0);
    }

    const onDrag = (event, info) => {
        if (prefersReducedMotion) return
        speed.set(factor.dragSpeed * -info.delta.x)
        console.log(-info.delta.x)
    }

    const onDragEnd = (event) => {
        if (prefersReducedMotion) return
        slowDown.current = false
        marquee.current.classList.remove("drag")
        xVelocity.current = factor.carouselSpeed
    }

    const loop = () => {
        if (slowDown.current || Math.abs(xVelocity.current) < factor.threshold) return;
        xVelocity.current *= 0.66
        xVelocity.current < 0 ? xVelocity.current = Math.min(xVelocity.current, 0) : xVelocity.current = Math.max(xVelocity.current, 0)
        speed.set(factor.carouselSpeed + xVelocity.current)
    }

    useRafLoop(loop, true);

    const carouselContextValues = isCarouselExpanded

    return (
        <CarouselContext.Provider value = {carouselContextValues}>
            <motion.div
                className = { `${styles.carousel}  ${ !isCarouselExpanded ? styles.closed : styles.toggled }` }
                ref = { marquee }
                onWheel = { onWheel }
                drag = "x"
                dragConstraints = {{ left: 0, right: 0 }}
                onDragStart = { onDragStart }
                onDrag = { onDrag }
                onDragEnd = { onDragEnd }
                dragElastic = { 0.000001 }
            >
                <CarouselList content = { children } speed = { speed } /> 
                { !isCarouselExpanded ? 
                    <CarouselList content = {children} speed = { speed } />: <></>
                }
                <CarouselButtonNavigationLeft onHorizontalNavButtonClick = { onHorizontalNavButtonClick } />
                <CarouselButtonNavigationRight onHorizontalNavButtonClick = { onHorizontalNavButtonClick } />
                <CarouselButtonToggle onButtonToggleClick = { onButtonToggleClick } />
            </motion.div>
        </CarouselContext.Provider>
    );
};
