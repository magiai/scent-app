interface ISVGDecorator {
    scentName: string
    graphicDescription: string
    svgClassName: string
    children: React.ReactNode
}

export const SvgDecorator = ({
    scentName,
    graphicDescription,
    svgClassName,
    children
}: ISVGDecorator) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
            version="1.1"
            x="0" 
            y="0"
            viewBox="0 0 75 50"
            className = { svgClassName }
            aria-labelledby = { scentName }
        >
            <title id = { scentName }>
                {graphicDescription}
            </title>
            { children }
        </svg>
    )
}