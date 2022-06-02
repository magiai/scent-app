import React from "react";
import './forms.css';

interface TextareaProps {
    labelFor: string,
    id: string,
    labelClass?: string,
    textareaClass?: string,
    placeholderText?: React.ReactNode
}

export const Textarea = ({
    labelFor,
    id,
    labelClass,
    textareaClass,
    placeholderText
}: TextareaProps) => {
    return (
        <>
            <label className = { labelClass } htmlFor = { labelFor }>Textarea</label>
            <textarea className = { textareaClass } id = { id }>{ placeholderText }</textarea>
        </>
    )
}