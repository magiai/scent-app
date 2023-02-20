import { useState, useCallback } from "react"

export const useShouldBeCarouselLooping = (initialState) => {
    const [shouldBeCarouselLooping, setShouldBeCarouselLooping] = useState(initialState)
  
    const setLoopingCarousel = useCallback((isLooping) => {
        setShouldBeCarouselLooping(isLooping)
    }, [])
  
    return [shouldBeCarouselLooping, setLoopingCarousel]
  }