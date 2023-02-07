import React, { useContext } from 'react'
import styles from './scent.module.css'
import { ScentButton } from './ScentButton'
import { SvgDecorator } from '../../svg/SvgDecorator'
import { ScentImage } from './scentImage/ScentImage'
import { ScentLabel } from './ScentLabel'
import { ScentFamilyContext } from './../scentFamilyDecorator'

interface IScentProps {
    liquidColor: string
    liquidColorSecond: string
    label: string
    latinName: string
    note: string
    isBasicScent: boolean
}

export const Scent = ({
    liquidColor,
    liquidColorSecond,
    label,
    latinName,
    note,
    isBasicScent
}: IScentProps) => {
    let proportion = 1
    //naprawić, po usunięciu showBasicScents psuje się svg
    const [showBasicScents, scentFamilyName] = useContext(ScentFamilyContext)
    const chosenScentData = [liquidColor, note, label, proportion]
    const graphicDescription = `${label} in the ${scentFamilyName} scent category, latin name ${latinName}` 
    
    return (
        <ScentButton chosenScentDataForDispach = { chosenScentData } isBasicScent = { isBasicScent }>        
            <figure className = { styles.figure }>
                <SvgDecorator 
                    scentName = { label } 
                    graphicDescription = { graphicDescription } 
                    svgClassName = { styles.scentSvg }
                    >
                    <ScentImage liquidColor = { liquidColor } liquidColorSecond ={ liquidColorSecond } scentFamilyName = { scentFamilyName }/>
                </SvgDecorator>
                <ScentLabel 
                    label = { label } 
                    latinName = { latinName }
                    />
            </figure>
        </ScentButton>
    );
};