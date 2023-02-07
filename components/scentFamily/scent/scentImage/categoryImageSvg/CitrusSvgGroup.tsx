import React from "react";
import styles from './../../scent.module.css';
import { noiseFilter } from '../../../../svg/filters/noiseFilter'

interface ICitrusSvgGroup {
    liquidColor: string
    accentColor: string
}

export const CitrusSvgGroup = ({
    liquidColor,
    accentColor
}: ICitrusSvgGroup) => {
    const gradientId = `gradient-${liquidColor}-citrus`
    const gradientIdUrl = `url(\'#${gradientId}\')`

    return (
        <g>
            <g>
                <linearGradient id = { gradientId } r="48%" gradientTransform="rotate(10)">
                    <stop offset="15%" stopColor = { accentColor } />
                    <stop offset="75%" stopColor = { liquidColor } />
                </linearGradient>

                <circle className="circle--gradient" cx="50%" cy="50%" r="39%" fill = { gradientIdUrl } />
            </g>
            <g>
                <filter id='noiseFilter'>
                    { noiseFilter }
                    <feComposite in="blend" in2="SourceGraphic" operator="in" result="composite1"/>
                </filter>

                <circle className={styles.noiseFilter} cx="50%" cy="50%" r="39%" filter='url(#noiseFilter)'/>
            </g>
        </g>
    )
}