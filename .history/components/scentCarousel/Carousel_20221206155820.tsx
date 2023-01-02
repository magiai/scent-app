import styles from './scentCarousel.module.css'
import { useRef, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import normalizeWheel from "normalize-wheel";
import { useRafLoop } from "react-use";
import { CarouselItem } from './CarouselItem'

const factor = {
    speed: 0.5,
    threshold: 0.014,
    wheel: 1.8,
    drag: 1.2
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
    const x = useRef(0);

    const speed = useSpring(factor.speed, {
        damping: 40,
        stiffness: 90,
        mass: 5
    });

    const onWheel = (event) => {
        const normalized = normalizeWheel(event);
        x.current = normalized.pixelY * factor.wheel;
        console.log(e)

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
        x.current = factor.speed
    };

    const loop = () => {
        if (slowDown.current || Math.abs(x.current) < factor.threshold) return;
        x.current *= 0.66
        x.current < 0 ? x.current = Math.min(x.current, 0) : x.current = Math.max(x.current, 0)
        speed.set(factor.speed + x.current)
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
