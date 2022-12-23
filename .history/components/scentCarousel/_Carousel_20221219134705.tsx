import styles from './scentCarousel.module.css'
import React, { createContext, useEffect, useRef, useState } from "react"
import { motion, useSpring } from "framer-motion"
import normalizeWheel from "normalize-wheel"
import { useRafLoop } from "react-use"
import { CarouselList } from './CarouselList'
import { CarouselButtonNavigationLeft, 
        CarouselButtonNavigationRight,
        CarouselButtonToggle } from './CarouselButtons'

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
    const marquee = useRef(null)
    // const carouselList = useRef(null)
    const slowDown = useRef(false)
    const xVelocity = useRef(0)
    const CarouselContext = createContext(null);
    const [isCarouselExpanded, setCarouselIsExpanded] = useState(false)

    const speed = useSpring(factor.carouselSpeed, {
        damping: 10,
        stiffness: 30,
        mass: 8
    });

    const onWheel = (event) => {
        const normalizedScrollDistance = normalizeWheel(event);
        xVelocity.current = normalizedScrollDistance.pixelY * factor.wheelSpeed
    }

    const onHorizontalNavButtonClick = (velocityValue: number) => {
        xVelocity.current = velocityValue;
        return xVelocity.current
    }

    const expand = () => {
        setCarouselIsExpanded(!isCarouselExpanded);
      };
      
      const collapse = () => {
        setCarouselIsExpanded(!isCarouselExpanded);
      };

    // const onButtonToggleClick = (event) => {
    //     toggleCarousel(prevCarouselState => !prevCarouselState)
    // }
    const carouselCotexValues = {isCarouselExpanded, expand, collapse}

    useEffect(() => {
        isCarouselExpanded ? speed.set(0) : speed.set(factor.carouselSpeed);
    }, [isCarouselExpanded])

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
        <CarouselContext.Provider value = {carouselCotexValues}>
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
                <CarouselList content = { children } speed = { speed } isCarouselToggled = {isCarouselToggled} /> 
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
