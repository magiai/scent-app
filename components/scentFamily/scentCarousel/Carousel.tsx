import styles from './scentCarousel.module.css'
import React, { createContext, useRef, useEffect } from "react"
import { useToggleCarousel } from '../../../app/hooks/useToggleCarousel'
import { useShouldBeCarouselLooping } from '../../../app/hooks/useShouldBeCarouselLooping'
import { motion, useSpring, useReducedMotion } from "framer-motion"
import normalizeWheel from "normalize-wheel"
import { useRafLoop } from "react-use"
import { CarouselList } from './CarouselList'
import { CarouselButtonNavigationLeft, 
        CarouselButtonNavigationRight,
        CarouselButtonToggle } from './CarouselButtons'
import { useAppSelector } from '../../../app/redux/hooks'
import { selectSearch } from "../../../app/redux/slices/searchSlice"

export const CarouselContext = createContext([]);

interface ICarouselProps {
    children: React.ReactNode,
}

export const Carousel = ({
    children
}: ICarouselProps) => {
    const carouselRef = useRef(null)
    const xVelocity = useRef(0)
    const [isCarouselToggled, toggleCarousel] = useToggleCarousel(false)
    const [shouldBeCarouselLooping, setLoopingCarousel] = useShouldBeCarouselLooping(false)
    const carouselContextValues = [isCarouselToggled, shouldBeCarouselLooping]
    const selectPhrase = useAppSelector(selectSearch)

    const prefersReducedMotion = useReducedMotion()

    const factor = {
        carouselSpeed: prefersReducedMotion ? 0.0011 : 0.15,
        threshold: 0.001,
        wheelSpeed: 1.5,
        dragSpeed: 1.5,
    };

    const speed = useSpring(factor.carouselSpeed, {
        damping: 10,
        stiffness: 30,
        mass: 8
    })

    const handleLoopingTime = timeToStop => {
        setLoopingCarousel(true)
        setTimeout(() => setLoopingCarousel(false), timeToStop)
    }

    const handleIntraction = interactionHandler => {
        if (isCarouselToggled || selectPhrase !== '') {
            return
        } else {
            interactionHandler(event)
        }
    }

    const onWheel = event => {
        const normalizedScrollDistance = normalizeWheel(event);
        xVelocity.current = normalizedScrollDistance.pixelY * factor.wheelSpeed
        handleLoopingTime(3000)
    }

    const onHorizontalNavButtonClick = (velocityValue: number) => {
        handleLoopingTime(500)
        xVelocity.current = velocityValue
        return xVelocity.current
    }
    
    useEffect(() => {
        setLoopingCarousel(false)
    }, [isCarouselToggled, selectPhrase])

    const onDragStart = event => {
        carouselRef.current.classList.add("drag")
        setLoopingCarousel(true)
    }

    const onDrag = (event, info) => {
        if (isCarouselToggled || selectPhrase !== '') return;
        speed.set(factor.dragSpeed * -info.delta.x)
    }

    const onDragEnd = event => {
        carouselRef.current.classList.remove("drag")
        setLoopingCarousel(false)
    }

    const setXVelocity = () => {
        xVelocity.current *= 0.66
        xVelocity.current = xVelocity.current < 0 ? Math.min(xVelocity.current, 0) : Math.max(xVelocity.current, 0)
        speed.set(factor.carouselSpeed + xVelocity.current)
    }

    const loop = () => {
        if (!shouldBeCarouselLooping || Math.abs(xVelocity.current) < factor.threshold) return;
        setXVelocity()
    }

    useRafLoop(loop, true);

    return (
        <CarouselContext.Provider value = {carouselContextValues}>
            <motion.div
                className = { `${styles.carousel} ${ !isCarouselToggled && selectPhrase === '' ? styles.closed : styles.toggled }` }
                ref = { carouselRef }
                onWheel = { () => handleIntraction(onWheel) }
                drag = "x"
                dragConstraints = {{ left: 0, right: 0 }}
                onDragStart = { () => handleIntraction(onDragStart) }
                onDrag = { onDrag }
                onDragEnd = { () => handleIntraction(onDragEnd) }
                dragElastic = { 0.000001 }
            >
                <CarouselList content = { children } speed = { speed } /> 
                { !isCarouselToggled && selectPhrase === '' ? 
                    <CarouselList content = {children} speed = { speed } />: <></>
                }
                <CarouselButtonNavigationLeft onHorizontalNavButtonClick = { onHorizontalNavButtonClick } />
                <CarouselButtonNavigationRight onHorizontalNavButtonClick = { onHorizontalNavButtonClick } />
                <CarouselButtonToggle onButtonToggleClick = { toggleCarousel } />
            </motion.div>
        </CarouselContext.Provider>
    );
};
