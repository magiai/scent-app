import { useRef, useEffect } from "react"
import { useRafLoop } from "react-use"
import { useWindowSize } from "@react-hook/window-size"
import styles from './scentCarousel.module.css'

export const CarouselItem = ({ content, speed }) => {
    const item = useRef(null);
    const rect = useRef({});
    const xAxisContentPosition = useRef(0);

    const [width, height] = useWindowSize();

    const setXAxisContentPosition = () => {
        if (!item.current || !rect.current) return;
        // console.log(typeof item.current.getBoundingClientRect())
        const xAxisContentPositionPercentage = (xAxisContentPosition.current / rect.current.width) * 100;
        if (xAxisContentPositionPercentage < -100) xAxisContentPosition.current = 0;
        if (xAxisContentPositionPercentage > 0) xAxisContentPosition.current = -rect.current.width;
        item.current.style.transform = `translate3d(${xAxisContentPositionPercentage}%, 0, 0)`;

    // if (x.current < -rect.current.width) x.current = 0;
    // if (x.current > 0) x.current = -rect.current.width;
    // item.current.style.transform = `translate3d(${x.current}px, 0, 0)`;
    };

    useEffect(() => {
        rect.current = item.current.getBoundingClientRect();
    }, [width, height]);

    // const buffer = useRef(0);
    const loop = (e) => {
        xAxisContentPosition.current -= speed.get();
        setXAxisContentPosition();

    // const delta = (e - buffer.current) / 1000;
    // const c = Math.max(1 / 60 / delta, 1);
    // buffer.current = e;
    // x.current -= speed.get() / c;
    // setX();
    };

    useRafLoop(loop, true);

    return (
        <ul className = { styles['carousel__list'] }  ref={item}>
        {/* <div className="carouselItem" ref={item}> */}
            {content}
        {/* </div> */}
        </ul>
    );
};