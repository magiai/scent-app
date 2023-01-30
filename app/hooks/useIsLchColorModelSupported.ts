export const useIsLchColorModelSupported = () => {
    
    if (typeof window !== 'undefined') {
        const testVariableValue = getComputedStyle(document.documentElement).getPropertyValue('--isLChSupported');
        let isLchColorModelSupported = testVariableValue !== '' ? true : false
        return isLchColorModelSupported
    }
}