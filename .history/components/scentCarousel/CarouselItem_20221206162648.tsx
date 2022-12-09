import React, { useRef, useEffect } from "react"
import { useRafLoop } from "react-use"
import { useWindowSize } from "@react-hook/window-size"
import styles from './scentCarousel.module.css'

interface CarouselItemProps {
    content: React.ReactNode,
    speed: any
}

export const CarouselItem = ({ 
    content, 
    speed 
}: CarouselItemProps) => {
    const carouselItem = useRef<any>(null)

    //rozkminić jak używa się TypeScript i useRef
    const rect = useRef<Object>({}) 
    const xAxisContentPosition = useRef<number>(0)

    const [width, height] = useWindowSize()

    const setXAxisContentPosition = () => {
        if (!carouselItem.current || !rect.current) return
        const xAxisContentPositionPercentage = (xAxisContentPosition.current / rect.current.width) * 100
        if (xAxisContentPositionPercentage < -100) xAxisContentPosition.current = 0
        if (xAxisContentPositionPercentage > 0) xAxisContentPosition.current = -rect.current.width
        carouselItem.current.style.transform = `translate3d(${xAxisContentPositionPercentage}%, 0, 0)`
    };

    useEffect(() => {
        rect.current = carouselItem.current.getBoundingClientRect()
    }, [width, height])

    const loop = () => {
        xAxisContentPosition.current -= speed.get()
        setXAxisContentPosition()
    };

    useRafLoop(loop, true)

    return (
        <ul className = { styles['carousel__list'] }  ref = { carouselItem }>
            {content}
        </ul>
    );
};