import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
        <svg 
            className="svg__button"
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
            x="0px" 
            y="0px" 
            viewBox="0 0 362.664 362.664" 
        >
            <path id="bottle__path"
                fill="orange"
                d="M307.112,175.072c-10.75-3.962-17.886-14.213-17.886-25.652V81.455h1.122  
                c6.545,0,12.225-4.507,13.713-10.876l12.098-51.399c0.996-4.201,0-8.614-2.664-11.981c-2.678-3.385-6.738-5.341-11.053-5.341  
                H194.063c-4.314,0-8.371,1.956-11.053,5.341c-2.658,3.367-3.655,7.78-2.658,11.981l12.093,51.399  
                c1.492,6.369,7.171,10.876,13.716,10.876h1.123v67.965c0,11.453-7.14,21.69-17.886,25.652  
                C88.173,212.417,11.031,340.958,0.105,464.879c-0.672,7.636,1.892,15.208,7.076,20.857c5.166,5.679,12.495,8.916,20.163,8.916  
                h441.817c7.686,0,15.003-3.223,20.181-8.885c5.185-5.661,7.734-13.252,7.059-20.888C485.48,340.958,408.334,212.417,307.112,175.072  
                z M248.253,433.15c-58.968,0-106.769-32.486-106.769-72.54c0-40.072,47.802-72.558,106.769-72.558  
                c58.973,0,106.775,32.486,106.775,72.558C355.028,400.665,307.225,433.15,248.253,433.15z"/>
            {/* <path 
            fill="orange"
            id="bottle__path"
                d="M326.197,217.684c0-14.664-2.472-29.243-7.346-43.334l-1.63-4.711h-0.119c-4.807-12.383-11.477-24.266-19.923-35.369     
                c-16.07-21.126-37.974-38.302-62.301-48.985c-1.015-0.446-3.057-1.059-3.057-4.892l-0.392-25.177h6.549     
                c8.759,0,15.886-7.126,15.886-15.885V15.886C253.864,7.127,246.738,0,237.978,0H125.686c-8.759,0-15.885,7.127-15.885,15.886     
                v23.445c0,8.759,7.126,15.885,15.885,15.885h5.625L131.23,80.06c0,3.75-2.221,4.689-3.323,5.172     
                c-24.308,10.644-46.197,27.762-62.283,48.842c-8.515,11.159-15.232,23.107-20.067,35.564h-0.119l-1.629,4.712     
                c-4.872,14.089-7.342,28.668-7.342,43.333c0,0.018,0,0.036,0,0.053c0,0.021,0,0.042,0,0.063     
                c0,79.879,64.986,144.865,144.865,144.865s144.865-64.986,144.865-144.865c0-0.021,0-0.042,0-0.063     
                C326.197,217.72,326.197,217.702,326.197,217.684z M202.109,272.231c0-7.348,5.957-13.305,13.305-13.305     
                s13.305,5.957,13.305,13.305s-5.957,13.305-13.305,13.305S202.109,279.579,202.109,272.231z M228.718,213.922     
                c0-12.15,9.85-22,22-22s22,9.85,22,22s-9.85,22-22,22S228.718,226.072,228.718,213.922z M140.66,95.165     
                c0,0,4.543-2.022,4.543-7.522c0-9.792,0.127-27.917,0.127-39.166c0-7.5-6.831-7.261-6.831-7.261h-12.813     
                c-1.022,0-1.885-0.863-1.885-1.885V15.886c0-1.022,0.863-1.886,1.885-1.886h112.292c1.022,0,1.886,0.864,1.886,1.886v23.445     
                c0,1.022-0.864,1.885-1.886,1.885h-13.146c0,0-7.473,0.552-7.473,8.929c0,10.874,0.592,28.679,0.592,38.241     
                c0,5.757,4.469,6.934,4.469,6.934c32.593,12.269,59.116,36.124,74.668,64.853c1.679,3.102,4.577,9.466-4.089,9.466h-225.5     
                c-6.833,0-3.513-6.596-1.764-9.807C81.372,131.122,107.979,107.339,140.66,95.165z"/> */}
            <text y="70%" className="svg__button__label">{label}</text>
        </svg>
 
    </button>
  );
};
