import styles from './scentCarousel.module.css'
import { useRef } from "react";
import { motion, useSpring } from "framer-motion";
import normalizeWheel from "normalize-wheel";
import { useRafLoop } from "react-use";
import { CarouselItem } from './CarouselItem'

const factors = {
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

    const speed = useSpring(factors.speed, {
        damping: 40,
        stiffness: 90,
        mass: 5
    });

    const onWheel = (e) => {
        const normalized = normalizeWheel(e);
        x.current = normalized.pixelY * factors.wheel;
        // Reset speed on scroll end
        window.clearTimeout(isScrolling.current);
        isScrolling.current = setTimeout(function () {
            speed.set(factors.speed);
        }, 30);
    };

    const onDragStart = () => {
        slowDown.current = true;
        marquee.current.classList.add("drag");
        speed.set(0);
    };

    const onDrag = (info) => {
        speed.set(factors.drag * -info.delta.x);
    };

    const onDragEnd = (e) => {
        slowDown.current = false;
        marquee.current.classList.remove("drag");
        x.current = factors.speed;
    };

    const loop = () => {
        if (slowDown.current || Math.abs(x.current) < factors.threshold) return;
        x.current *= 0.66;
        x.current < 0 ? x.current = Math.min(x.current, 0) : x.current = Math.max(x.current, 0)
        speed.set(factors.speed + x.current);
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
            dragElastic = { 0.000001 } // needs to be > 0 ¯\_(ツ)_/¯
        >
            <CarouselItem content = {children} speed = { speed } />
            <CarouselItem content = { children } speed = { speed } />
        </motion.div>
    );
};
