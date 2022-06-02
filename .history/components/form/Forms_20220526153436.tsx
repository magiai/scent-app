import React from 'react';
import '../../styles/forms.css';
import { Textarea } from './Textarea';

interface FormProps {
    name?: string;
    method: string;
    className?: string; 
}

export const Form = ({
    name,
    method,
    className
}: FormProps) => {
    return (
        <form name = { name }
            method = { method }
            className = { className }>

            <label htmlFor="text-input">Text Input</label>
            <input readonly className="input" id="text-input" type="text" />
            <br/>
            <Textarea 
                labelFor='textarea' 
                className='input'
                id='textarea'
                placeholderText='Exemplary text'></Textarea>
            <br />
            <label className="form-control">
                <input name="checkbox" type="checkbox"/>
                Checkbox
            </label>
            <br />
            <label className="form-control">
                <input name="radio" type="radio" disabled/>
                Radio
            </label>
            <br />
            <label className="form-control">
                <input name="radio" type="radio"/>
                Radio - checked
            </label>
            <br />
            <label htmlFor="standard-select">Standard Select</label>
            <div className="select">
                <select id="standard-select">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                    <option value="Option length">
                    Option that has too long of a value to fit
                    </option>
                </select>
                <span className="focus"></span>
            </div>
        </form>
    );
};
