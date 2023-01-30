import { useAppSelector } from '../../app/redux/hooks';
import { selectIsLchModelSupported } from "../../app/redux/slices/colorModelSlice";

export class ColorConverter {
    private scentColor: string
    private differenceValue: number
  
    constructor(
        scentColor: string, 
        differenceValue: number
    ) {
      this.scentColor = scentColor
      this.differenceValue = differenceValue
    }
    
    public calculateLighterColor() {
        let isLchSupported = useAppSelector(selectIsLchModelSupported).isLchSupported;
        const newColor = isLchSupported ? this.calculateColorFromLchColorModel() : this.calculateColorFromHslColorModel() 
        return newColor
    }
    
    private calculateNewLightnessValue(lightnessValue): number {
        return lightnessValue <= 100 - this.differenceValue ? 
            lightnessValue + this.differenceValue : 
            lightnessValue + (100 - lightnessValue)
    }
    
    private calculateColorFromLchColorModel():string {
        const [lightness, chroma, hue] = this.scentColor.split(" ")
        const lightnessValueExtracted = lightness.slice(-lightness.length + 4, -1)
        const lightnessValue = Number(lightnessValueExtracted)
        const newLightnessValue = this.calculateNewLightnessValue(lightnessValue)
        const newColor = `lch(${newLightnessValue}`.concat("% ", chroma, " ", hue)
        
        return newColor;
    }
    
    private calculateColorFromHslColorModel():string {
        const [hue, saturation, lightness] = this.scentColor.split(" ")
        const lightnessValueExtracted = lightness.slice(-lightness.length, -2)
        const lightnessValue = Number(lightnessValueExtracted)
        const newLightnessValue = this.calculateNewLightnessValue(lightnessValue)
        const newColor = hue.concat(" ", saturation, " ", `${newLightnessValue}%)`)
        
        return newColor;
    }
  }