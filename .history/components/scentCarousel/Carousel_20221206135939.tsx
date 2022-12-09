import styles from './scentCarousel.module.css'
import { useRef, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import normalizeWheel from "normalize-wheel";
import { useRafLoop } from "react-use";
import { CarouselItem } from './CarouselItem'

const _ = {
    speed: 0.5,
    threshold: 0.014,
    wheelFactor: 1.8,
    dragFactor: 1.2
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

    const speed = useSpring(_.speed, {
        damping: 40,
        stiffness: 90,
        mass: 5
    });

    const onWheel = (e) => {
        const normalized = normalizeWheel(e);
        x.current = normalized.pixelY * _.wheelFactor;

        // Reset speed on scroll end
        window.clearTimeout(isScrolling.current);
        isScrolling.current = setTimeout(function () {
        speed.set(_.speed);
        }, 30);
    };

    const onDragStart = () => {
        slowDown.current = true;
        marquee.current.classList.add("drag");
        speed.set(0);
    };

    const onDrag = (info) => {
        speed.set(_.dragFactor * -info.delta.x);
    };

    const onDragEnd = (e) => {
        slowDown.current = false;
        marquee.current.classList.remove("drag");
        x.current = _.speed;
    };

    const loop = () => {
        if (slowDown.current || Math.abs(x.current) < _.threshold) return;
        x.current *= 0.66;
        if (x.current < 0) {
        x.current = Math.min(x.current, 0);
        } else {
        x.current = Math.max(x.current, 0);
        }
        console.log(typeof speed)
        speed.set(_.speed + x.current);
    };

    useRafLoop(loop, true);

    return (
        <motion.div
            className = {styles['carousel']}
            ref={marquee}
            onWheel={onWheel}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={onDragStart}
            onDrag={onDrag}
            onDragEnd={onDragEnd}
            dragElastic={0.000001} // needs to be > 0 ¯\_(ツ)_/¯
        >
            <CarouselItem content={children} speed={speed} />
            <CarouselItem content={children} speed={speed} />
        </motion.div>
    );
};
