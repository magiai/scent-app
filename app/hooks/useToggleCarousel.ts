import { useState, useCallback } from "react"

export const useToggleCarousel = (initialState) => {
    const [isCarouselToggled, setIsCarouselToggled] = useState(initialState)
  
    const toggleCarousel = useCallback(() => {
        setIsCarouselToggled(previousState => !previousState)
    }, [])
  
    return [isCarouselToggled, toggleCarousel]
  }