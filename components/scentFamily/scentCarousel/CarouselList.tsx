import React, { useRef, useEffect, useContext, useLayoutEffect } from "react"
import { motion } from "framer-motion"
import { useWindowSize } from "@react-hook/window-size"
import styles from './scentCarousel.module.css'
import { CarouselContext } from './Carousel'
import { useAppSelector } from '../../../app/redux/hooks'
import { selectSearch } from "../../../app/redux/slices/searchSlice"
import { ScentFamilyContext } from '../scentFamilyDecorator'

interface ICarouselListProps {
    content: React.ReactNode,
    speed: any,
}

export const CarouselList = ({ 
    content, 
    speed,
}: ICarouselListProps) => {
    const carouselList = useRef<any>(null)
    const rect = useRef<number>(0)
    const frame = useRef<number>(0)
    const xAxisContentPosition = useRef<number>(0)
    const [isCarouselExpanded, shouldBeCarouselLooping] = useContext(CarouselContext)
    const [showBasicScents] = useContext(ScentFamilyContext)
    const searchedPhrase = useAppSelector(selectSearch);
    const [width, height] = useWindowSize()

    const calculteXAxisContentPosition = () => {
        const xAxisContentPositionPercentage = (xAxisContentPosition.current / rect.current) * 100
        return xAxisContentPositionPercentage
    }

    const setXAxisContentPosition = () => {
        const xPosition = calculteXAxisContentPosition()
        if (xPosition < -100) xAxisContentPosition.current = 0
        if (xPosition > 0) xAxisContentPosition.current = -rect.current
        carouselList.current.style.transform = `translate3d(${xPosition}%, 0, 0)`
    };

    const setRectangularReference = () => {
        if(!carouselList.current) return
        rect.current = carouselList.current.getBoundingClientRect().width
    }
    
    useLayoutEffect(() => {
        setRectangularReference()
    }, [carouselList.current])

    useEffect(() => {
        setRectangularReference()
    }, [width, height])

    useEffect(() => {
        if (isCarouselExpanded || searchedPhrase !== '') {
            xAxisContentPosition.current = 0
        }
    }, [isCarouselExpanded, searchedPhrase, showBasicScents])

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
        shouldBeCarouselLooping ? loop() : stopLooping()
    }, [shouldBeCarouselLooping])

    return (
        // https://codesandbox.io/s/framer-motion-2-layout-animations-kij8p?from-embed
        <motion.ul 
                    layout="position" 
                    className = { styles.carouselList }  
                    ref = { carouselList }>
            { content }
        </motion.ul>
    );
};