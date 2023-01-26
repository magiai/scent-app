import React from 'react';
import { CitrusSvg } from './categoryImageSvg/CitrusSvg'

interface IScentImageProps {
    liquidColor: string
    liquidColorSecond: string
    scentFamilyName: string
}

export const ScentImage = ({
    liquidColor,
    liquidColorSecond,
    scentFamilyName
}: IScentImageProps) => {
    let svgType = null;
    
    const calculateNewColor = () => {
        let newColor
        const colorValues = liquidColor.split(' ')
        const [hue, white, black] = colorValues
        const whiteValue = Number(white.slice(-white.length, -1))

        if (whiteValue >= 35) {
            const newWhiteValue = (whiteValue - 35).toString()
            newColor = hue.concat(' ', newWhiteValue, '% ', black)
        } else {
            const blackValue = Number(black.slice(-black.length, -2))
            const newBlackValue = blackValue <= 80 ? blackValue + 20 : blackValue - 20
            newColor = hue.concat(' ', white, ' ', newBlackValue.toString(), '%)')
        }

        return newColor
    }

    const newColor = calculateNewColor()

    switch (scentFamilyName) {
        case 'citrus':
            svgType = <CitrusSvg liquidColor = { liquidColor } accentColor = { newColor } />
        default: 
            svgType = <CitrusSvg liquidColor = { liquidColor } accentColor = { newColor } />
    }

    return (
        <>
            { svgType }
        </>
    );
};