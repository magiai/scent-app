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
            <label htmlFor="textarea">Textarea</label>
            <textarea className="input" id="textarea"></textarea>
        </>
    )
}