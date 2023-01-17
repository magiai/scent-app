import styles from './scentCarousel.module.css'
import React, { createContext, useEffect, useRef, useState } from "react"
import { motion, useSpring, useReducedMotion } from "framer-motion"
import normalizeWheel from "normalize-wheel"
import { useRafLoop } from "react-use"
import { CarouselList } from './CarouselList'
import { CarouselButtonNavigationLeft, 
        CarouselButtonNavigationRight,
        CarouselButtonToggle } from './CarouselButtons'
import { useAppSelector } from '../../../app/hooks'
import { selectSearch } from "../../search/searchSlice"

export const CarouselContext = createContext(false);

interface ICarouselProps {
    children: React.ReactNode,
}

export const Carousel = ({
    children
}: ICarouselProps) => {
    const carouselRef = useRef(null)
    const slowDown = useRef(false)
    const xVelocity = useRef(0)
    const [isCarouselExpanded, setCarouselIsExpanded] = useState(false)
    const prefersReducedMotion = useReducedMotion()
    const selectPhrase = useAppSelector(selectSearch);
    
    const factor = {
        carouselSpeed: prefersReducedMotion ? 0.0011 : 0.15,
        threshold: 0.001,
        wheelSpeed: 1.5,
        dragSpeed: 1.2
    };

    const speed = useSpring(factor.carouselSpeed, {
        damping: 10,
        stiffness: 30,
        mass: 8
    });

    const onWheel = (event) => {
        if (isCarouselExpanded || selectPhrase !== '') return; 
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
        isCarouselExpanded ? speed.set(0) : speed.set(factor.carouselSpeed)
        selectPhrase !== '' ? speed.set(0) : speed.set(factor.carouselSpeed)
    }, [isCarouselExpanded || selectPhrase])

    const onDragStart = (event) => {
        slowDown.current = true
        carouselRef.current.classList.add("drag")
        speed.set(0);
    }

    const onDrag = (event, info) => {
        speed.set(factor.dragSpeed * -info.delta.x)
    }

    const onDragEnd = (event) => {
        slowDown.current = false
        carouselRef.current.classList.remove("drag")
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
                className = { `${styles.carousel} ${ !isCarouselExpanded && selectPhrase === '' ? styles.closed : styles.toggled }` }
                ref = { carouselRef }
                onWheel = { onWheel }
                drag = "x"
                dragConstraints = {{ left: 0, right: 0 }}
                onDragStart = { onDragStart }
                onDrag = { onDrag }
                onDragEnd = { onDragEnd }
                dragElastic = { 0.000001 }
            >
                <CarouselList content = { children } speed = { speed } /> 
                { !isCarouselExpanded && selectPhrase === '' ? 
                    <CarouselList content = {children} speed = { speed } />: <></>
                }
                <CarouselButtonNavigationLeft onHorizontalNavButtonClick = { onHorizontalNavButtonClick } />
                <CarouselButtonNavigationRight onHorizontalNavButtonClick = { onHorizontalNavButtonClick } />
                <CarouselButtonToggle onButtonToggleClick = { onButtonToggleClick } />
            </motion.div>
        </CarouselContext.Provider>
    );
};
