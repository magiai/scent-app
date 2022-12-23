import React, { useRef, useEffect, useContext } from "react"
import { useRafLoop } from "react-use"
import { motion } from "framer-motion"
import { useWindowSize } from "@react-hook/window-size"
import styles from './scentCarousel.module.css'
import { CarouselContext } from './Carousel'

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
    const xAxisContentPosition = useRef<number>(0)
    const isCarouselExpanded = useContext(CarouselContext)

    const [width, height] = useWindowSize()

    const calculateXAxisContentPosition = () => {
        const xAxisContentPositionPercentage = (xAxisContentPosition.current / rect.current.width) * 100
        return xAxisContentPositionPercentage
    }

    const setXAxisContentPosition = () => {
        const xAxisContentPosition = calculateXAxisContentPosition()
       
        if (xAxisContentPosition < -100 || isCarouselExpanded) xAxisContentPosition.current = 0
        if (xAxisContentPosition > 0) xAxisContentPosition.current = -rect.current.width
        
        carouselList.current.style.transform = `translate3d(${xAxisContentPosition}%, 0, 0)`
    };

    useEffect(() => {
        rect.current = carouselList.current.getBoundingClientRect()
    }, [width, height])

    const loop = () => {
        xAxisContentPosition.current -= speed.get()
        if (!carouselList.current || !rect.current) return
        setXAxisContentPosition()
    };

    useRafLoop(loop, true)

    return (
        <motion.ul layout="position" className = {styles.carouselList}  ref = { carouselList }>
            { content }
        </motion.ul>
    );
};