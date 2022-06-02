import React from "react";
import '../../styles/forms.css';

interface TextareaProps {
    labelFor: string,
    id: string,
    className?: string
}

export const Textarea = ({
    labelFor,
    id,
    className
}: TextareaProps) => {
    return (
        <>
            <label htmlFor = { labelFor }>Textarea</label>
            <textarea className = { className } id = { id }>klsfjlsdkfjlkds</textarea>
        </>
    )
}