import React from 'react';
import { CitrusSvg } from './categoryImageSvg/CitrusSvg'
import { ColorConverter } from '../../../utils/ColorConverter';

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
    const newColor = new ColorConverter(liquidColor, 25).calculateLighterColor();

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