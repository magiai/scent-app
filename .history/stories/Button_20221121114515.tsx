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
    <>
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
            viewBox="0 0 496.508 496.508" 
        >
            <filter id='noiseFilter' x="-10%" y="-10%" width="120%" height="120%" opacity="0.3">
                <feTurbulence 
                    type='fractalNoise' 
                    baseFrequency='5' 
                    numOctaves='10'
                    seed="10"
                    stitchTiles='stitch'/>
            </filter>

            <mask id="gradient-mask">
                <circle r="50%" cx="50%" cy="50%" filter="url(#noiseFilter)" />
            </mask>

            <path id="bottle__path"
                fill="orange"
                d="M307.112,175.072c-10.75-3.962-17.886-14.213-17.886-25.652V81.455h1.122  
                c6.545,0,12.225-4.507,13.713-10.876l12.098-51.399c0.996-4.201,0-8.614-2.664-11.981c-2.678-3.385-6.738-5.341-11.053-5.341  
                H194.063c-4.314,0-8.371,1.956-11.053,5.341c-2.658,3.367-3.655,7.78-2.658,11.981l12.093,51.399  
                c1.492,6.369,7.171,10.876,13.716,10.876h1.123v67.965c0,11.453-7.14,21.69-17.886,25.652  
                C88.173,212.417,11.031,340.958,0.105,464.879c-0.672,7.636,1.892,15.208,7.076,20.857c5.166,5.679,12.495,8.916,20.163,8.916  
                h441.817c7.686,0,15.003-3.223,20.181-8.885c5.185-5.661,7.734-13.252,7.059-20.888C485.48,340.958,408.334,212.417,307.112,175.072  
                z M248.253,433.15c-58.968,0-106.769-32.486-106.769-72.54c0-40.072,47.802-72.558,106.769-72.558  
                c58.973,0,106.775,32.486,106.775,72.558C355.028,400.665,307.225,433.15,248.253,433.15z"
                mask='url(#gradient-mask)'/>
        
            {/* <text y="70%" className="svg__button__label">{label}</text> */}
        </svg>
        <span>Palestinian Sweet Lime</span>
    </button>
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
            viewBox="0 0 496.508 496.508" 
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
        
            {/* <text y="70%" className="svg__button__label">Siberian fir</text> */}
        </svg>
        <span>{label}</span>
    </button>
    </>
  );
};
