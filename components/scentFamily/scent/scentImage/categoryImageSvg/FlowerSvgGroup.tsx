import React from "react";
import styles from './../../scent.module.css';
import { noiseFilter } from '../../../../svg/filters/noiseFilter'

interface IFlowerSvgGroup {
    liquidColor: string
    liquidSecondaryColor?: string
    accentColor: string
}

export const FlowerSvgGroup = ({
    liquidColor,
    liquidSecondaryColor,
    accentColor
}: IFlowerSvgGroup) => {
    const gradientId = `gradient-${liquidColor}-flower`
    const gradientIdUrl = `url(\'#${gradientId}\')`
    const feTurbulenceBase = <feTurbulence 
                                type="turbulence" 
                                baseFrequency=".17" //0.01
                                numOctaves="2"/>

    const getDisplacementFilter = resultName => {
        return <feDisplacementMap 
                    in = "SourceGraphic" 
                    in2 = "displacementMap" 
                    scale = "12"
                    result = { resultName }/>
    }                        

    return (
        <g>        
            <g>
                <filter id="displacement" className={styles.displacementFilter}>
					{ feTurbulenceBase }
                    { getDisplacementFilter("displaced") }
				</filter>

                <radialGradient id = { gradientId } r="48%">
                    <stop offset="15%" stopColor = { liquidSecondaryColor ?  liquidSecondaryColor : accentColor} />
                    <stop offset="25%" stopColor = { accentColor } />
                    <stop offset="75%" stopColor = { liquidColor } />
                </radialGradient>

                <circle cx="50%" cy="50%" r="36%" 
                        fill = { gradientIdUrl } 
                        filter="url(#displacement)" />
            </g>
            <g>
                <filter id='noiseFilter--flower'>
                    { feTurbulenceBase }
                    { getDisplacementFilter("displacedForNoise") }
                    { noiseFilter }
                    <feComposite in="displacedForNoise" operator="in" result="composite1"/>
                </filter>

                <circle className = {styles.noiseFilter}
                        cx="50%" cy="50%" r="36%"  
                        fill="white"
                        filter='url(#noiseFilter--flower)'/>
            </g>
        </g>
    )
}