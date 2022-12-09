import styles from './scentCarousel.module.css'
import { useRef, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import normalizeWheel from "normalize-wheel";
import { useRafLoop } from "react-use";
import { CarouselItem } from './CarouselItem'

const _ = {
    // content: "Around the world, around the world.",
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
    const constraintsRef = useRef(null);
    const x = useRef(0);

    const speed = useSpring(_.speed, {
        damping: 40,
        stiffness: 90,
        mass: 5
    });

    // rozwiązać problem undefined window i opacity, skewX z tym związanego!
    // const cameraRef = useRef();

    // useEffect(() => {
    //   if (!cameraRef.current) return;
    //   cameraRef.current.lookAt(0, 1, 0);
    // }, []);

    if (typeof window !== "undefined") {
        const windowInnerWidth = useRef(window.innerWidth).current;
        const opacity = useTransform(speed, [-windowInnerWidth * 0.25, 0, windowInnerWidth * 0.25], [1, 0, 1]);
        const skewX = useTransform(speed, [-windowInnerWidth * 0.25, 0, windowInnerWidth * 0.25], [-25, 0, 25]);
    }

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

    const onDrag = (e, info) => {
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
        speed.set(_.speed + x.current);
    };

    useRafLoop(loop, true);

    return (
        <motion.div
            className = {styles['carousel']}
            ref={marquee}
            // style={{ skewX }}
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
