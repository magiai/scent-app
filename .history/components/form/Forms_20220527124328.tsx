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
            <input className="input" id="text-input" type="text" />

            <label htmlFor="color-input">Color Input</label>
            <input className="input" id="color-input" type="color" />
            <label htmlFor="reset-input">Reset Input</label>
            <input className="input" id="reset-input" type="reset" />

            <label htmlFor="date-input">Date Input</label>
            <input className="input" id="date-input" type="date" />
            <label htmlFor="time-input">Time Input</label>
            <input className="input" id="time-input" type="time" />
            <label htmlFor="week-input">Week Input</label>
            <input className="input" id="week-input" type="week" />
            <label htmlFor="month-input">Month Input</label>
            <input className="input" id="month-input" type="month" />


            <label htmlFor="file-input">File Input</label>
            <input className="input" id="file-input" type="file" />
            <label htmlFor="search-input">Search Input</label>
            <input className="input" id="search-input" type="search" />
            
            <Textarea 
                labelFor='textarea' 
                className='input'
                id='textarea'
                placeholderText='Exemplary text'></Textarea>

            <label className="form-control">
                <input name="checkbox" type="checkbox"/>
                Checkbox
            </label>

            <label className="form-control">
                <input name="radio" type="radio" disabled/>
                Radio
            </label>

            <input name="rasop-two" type="radio"/>

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
            <label htmlFor="submit-input">Submit Input</label>
            <input className="input" id="submit-input" type="submit" />
        </form>
    );
};
