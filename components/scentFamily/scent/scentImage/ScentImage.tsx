import React from 'react';
import { CitrusSvgGroup } from './categoryImageSvg/CitrusSvgGroup'
import { FlowerSvgGroup } from './categoryImageSvg/FlowerSvgGroup'
import { ColorConverter } from '../../../utils/ColorConverter'

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
    const newColor = new ColorConverter(liquidColor, 25).calculateLighterColor()

    const SVG_GROUP_MAP = {
        'citrus': <CitrusSvgGroup liquidColor = { liquidColor } accentColor = { newColor } />,
        'flowers': <FlowerSvgGroup liquidColor = { liquidColor } liquidSecondaryColor = { liquidColorSecond } accentColor = { newColor } />,
      }
      
    const SvgGroup = SVG_GROUP_MAP[scentFamilyName]

    return (
        <>
            { SvgGroup }
        </>
    );
};