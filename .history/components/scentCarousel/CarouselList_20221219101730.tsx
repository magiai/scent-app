import React, { useRef, useEffect } from "react"
import { useRafLoop } from "react-use"
import { useWindowSize } from "@react-hook/window-size"
import styles from './scentCarousel.module.css'

interface CarouselListProps {
    content: React.ReactNode,
    speed: any,
    isCarouselToggled?: boolean,
}

export const CarouselList = ({ 
    content, 
    speed,
    isCarouselToggled
}: CarouselListProps) => {
    const carouselList = useRef<any>(null)
    const rect = useRef<Object>({}) 
    const xAxisContentPosition = useRef<number>(0)

    const [width, height] = useWindowSize()

    const setXAxisContentPosition = () => {
        if (!carouselList.current || !rect.current) return
        const xAxisContentPositionPercentage = (xAxisContentPosition.current / rect.current.width) * 100
        console.log(xAxisContentPositionPercentage)
        if (xAxisContentPositionPercentage < -100) xAxisContentPosition.current = 0
        if (xAxisContentPositionPercentage > 0) xAxisContentPosition.current = -rect.current.width

        // TODO naprawić translate3d po schowaniu toggle
        carouselList.current.style.transform = isCarouselToggled ? `translate3d(0%, 0, 0)` : `translate3d(${xAxisContentPositionPercentage}%, 0, 0)`
    };

    useEffect(() => {
        rect.current = carouselList.current.getBoundingClientRect()
    }, [width, height])

    const loop = () => {
        xAxisContentPosition.current -= speed.get()
        setXAxisContentPosition()
    };

    useRafLoop(loop, true)

    return (
        <ul className = {styles.carouselList}  ref = { carouselList }>
            { content }
        </ul>
    );
};