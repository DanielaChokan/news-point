import React, { useRef } from "react";
import styles from "./Slider.module.css";

interface Props {
    children: React.ReactElement;
    step?: number;
    isDark: boolean;
}

const Slider = ({children, step = 150, isDark}: Props) => {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollLeft -= step;
    }

    const scrollRight = () => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollLeft += step;
    }

    return (
        <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
            <button onClick={scrollLeft} className={styles.arrow}>{'<'}</button>
            <div ref={sliderRef} className={styles.sliderContent}>
                {children}
            </div>
            <button onClick={scrollRight} className={styles.arrow}>{'>'}</button>
        </div>
    )
}

export default Slider;