import React from "react";
import styles from './../../scent.module.css';

interface ICitrusSvg {
    liquidColor: string
    accentColor: string
}

export const CitrusSvg = ({
    liquidColor,
    accentColor
}: ICitrusSvg) => {
    const gradientId = `gradient-${liquidColor}`
    const gradientIdUrl = `url(\'#${gradientId}\')`

    return (
        <svg 
            className = { styles.scentSvg }
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
            x="0px" 
            y="0px" 
            viewBox="0 0 75 50">
        
            <g>
                <linearGradient id = { gradientId } r="48%" gradientTransform="rotate(10)">
                    <stop offset="15%" stopColor = { accentColor } />
                    <stop offset="75%" stopColor = { liquidColor } />
                </linearGradient>

                <circle className="circle--gradient" cx="50%" cy="50%" r="39%" fill = { gradientIdUrl } />
            </g>
            <g>
                <filter id='noiseFilter'>
                    <feTurbulence 
                                type='fractalNoise' 
                                baseFrequency='17' 
                                numOctaves='10'
                                seed="10"
                                stitchTiles='stitch'/>
                    <feComposite in="blend" in2="SourceGraphic" operator="in" result="composite1"/>
                </filter>

                <circle className={styles.noiseFilter} cx="50%" cy="50%" r="39%" filter='url(#noiseFilter)'/>
            </g>
        </svg>
    )
}