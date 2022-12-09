import styles from './scentCarousel.module.css'
import { useRef, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import normalizeWheel from "normalize-wheel";
import { useRafLoop } from "react-use";
import { CarouselItem } from './CarouselItem'

const factor = {
    speed: 0.5,
    threshold: 0.014,
    wheelSpeed: 1.5,
    drag: 4
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

    const speed = useSpring(factor.speed, {
        damping: 40,
        stiffness: 90,
        mass: 5
    });

    const onWheel = (event) => {
        const normalized = normalizeWheel(event);
        xVelocity.current = normalized.pixelY * factor.wheelSpeed;
        console.log(normalized)

        // Reset speed on scroll end
        window.clearTimeout(isScrolling.current);
        isScrolling.current = setTimeout(function () {
            speed.set(factor.speed);
        }, 30);
    };

    const onDragStart = (event) => {
        slowDown.current = true
        marquee.current.classList.add("drag")
        speed.set(0);
    };

    const onDrag = (event, info) => {
        speed.set(factor.drag * -info.delta.x)
    };

    const onDragEnd = (event) => {
        slowDown.current = false
        marquee.current.classList.remove("drag")
        xVelocity.current = factor.speed
    };

    const loop = () => {
        if (slowDown.current || Math.abs(xVelocity.current) < factor.threshold) return;
        xVelocity.current *= 0.66
        xVelocity.current < 0 ? xVelocity.current = Math.min(xVelocity.current, 0) : xVelocity.current = Math.max(xVelocity.current, 0)
        speed.set(factor.speed + xVelocity.current)
    };

    useRafLoop(loop, true);

    return (
        <motion.div
            className ={ styles['carousel'] }
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
        </motion.div>
    );
};
