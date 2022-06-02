import React from 'react';
import styles from './forms.module.css';
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

            <label className={styles.label} htmlFor="text-input">Text Input</label>
            <input className="input" id="text-input" type="text" inputMode='text'/>
            <label className={styles.label} htmlFor="number-input">Number Input</label>
            <input className="input" id="number-input" type="number" inputMode='numeric'/>
            <label className={styles.label} htmlFor="telephone-input">Telephone Input</label>
            <input className="input" id="telephone-input" type="tel" inputMode='tel' autoComplete='tel'/>
            <label className={styles.label} htmlFor="email-input">Email Input</label>
            <input className="input" id="email-input" type="email" inputMode='email' autoComplete='email'/>
            <label className={styles.label} htmlFor="password-input">Password Input</label>
            <input className="input" id="password-input" type="password" autoComplete='current-password'/>
            <label className={styles.label} htmlFor="url-input">Url Input</label>
            <input className="input" id="url-input" type="url" inputMode='url' autoComplete='url'/>

            <label className={styles.label} htmlFor="color-input">Color Input</label>
            <input className="input" id="color-input" type="color" />
            <label className={styles.label} htmlFor="reset-input">Reset Input</label>
            <input className="input" id="reset-input" type="reset" />

            <label className={styles.label} htmlFor="date-input">Date Input</label>
            <input className="input" id="date-input" type="date" />
            <label className={styles.label} htmlFor="time-input">Time Input</label>
            <input className="input" id="time-input" type="time" />
            <label className={styles.label} htmlFor="week-input">Week Input</label>
            <input className="input" id="week-input" type="week" />
            <label className={styles.label} htmlFor="month-input">Month Input</label>
            <input className="input" id="month-input" type="month" />


            <label className={styles.label} htmlFor="file-input">File Input</label>
            <input className="input" id="file-input" type="file" />
            <label className={styles.label} htmlFor="search-input">Search Input</label>
            <input className="input" id="search-input" type="search" inputMode='search'/>
            
            <Textarea 
                labelFor='textarea' 
                className='input'
                id='textarea'
                placeholderText='Exemplary text'></Textarea>

            <label className={`${styles.label} ${styles['form-control']}`}>
                <input name="checkbox" type="checkbox"/>
                Checkbox
            </label>

            <label className={`${styles['form-control']}`}>
                <input name="radio" type="radio" disabled/>
                Radio
            </label>

            <label className={`${styles['form-control']}`}>
                <input name="radio" type="radio"/>
                Radio - checked
            </label>
            
            <label className={styles.label} htmlFor="standard-select">Standard Select</label>
            <div className={ styles.select }>
                <select name="standard-select" className={ styles['standard-select'] }>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                    <option value="Option length">
                    Option that has too long of a value to fit
                    </option>
                </select>
                <span className={ styles.focus }></span>
            </div>

            <label htmlFor="submit-input">Submit Input</label>
            <input className={ styles.input } id="submit-input" type="submit" />
        </form>
    );
};
