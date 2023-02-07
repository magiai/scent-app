import React, { useRef, useEffect, useContext, useMemo } from "react"
import { useRafLoop } from "react-use"
import { motion } from "framer-motion"
import { useWindowSize } from "@react-hook/window-size"
import styles from './scentCarousel.module.css'
import { CarouselContext } from './Carousel'
import { useAppSelector } from '../../../app/redux/hooks'
import { selectSearch } from "../../../app/redux/slices/searchSlice"

interface CarouselListProps {
    content: React.ReactNode,
    speed: any,
}

export const CarouselList = ({ 
    content, 
    speed,
}: CarouselListProps) => {
    const carouselList = useRef<any>(null)
    const rect = useRef<Object>({})
    const frame = useRef<number>(0)
    const xAxisContentPosition = useRef<number>(0)
    const [isCarouselExpanded, shouldBeLooping] = useContext(CarouselContext)
    const searchedPhrase = useAppSelector(selectSearch);
    const [width, height] = useWindowSize()

    const calculteXAxisContentPosition = () => {
        const xAxisContentPositionPercentage = (xAxisContentPosition.current / rect.current.width) * 100
        return xAxisContentPositionPercentage
    }

    const setXAxisContentPosition = () => {
        const xPosition = calculteXAxisContentPosition()
        if (xPosition < -100) xAxisContentPosition.current = 0
        if (xPosition > 0) xAxisContentPosition.current = -rect.current.width

        carouselList.current.style.transform = `translate3d(${xPosition}%, 0, 0)`
    };
    
    useEffect(() => {
        rect.current = carouselList.current.getBoundingClientRect()
    }, [width, height])

    useEffect(() => {
        if (isCarouselExpanded === true || searchedPhrase !== '') {
            xAxisContentPosition.current = 0
        }
    }, [isCarouselExpanded || searchedPhrase])

    const stopLooping = () => {
        cancelAnimationFrame(frame.current)
        frame.current = undefined
    }

    const loop = () => {
        if (!carouselList.current || !rect.current) return
        xAxisContentPosition.current += speed.get()
        setXAxisContentPosition()
        frame.current = requestAnimationFrame(loop)
    }
   
    useEffect(() => {
        shouldBeLooping ? loop() : stopLooping()
    }, [shouldBeLooping])

    return (
        // https://codesandbox.io/s/framer-motion-2-layout-animations-kij8p?from-embed
        <motion.ul layout="position" className = { styles.carouselList }  ref = { carouselList }>
            { content }
        </motion.ul>
    );
};