import React from 'react';
import styles from './scent.module.css';

interface ScentImageProps {
    liquidColor: string;
}

export const ScentImage = ({
    liquidColor
}: ScentImageProps) => {
    //check with useContext
    // const mode: string = visibleBottle ? 'bottle--visible' : 'bottle--hidden';

    return (
            <svg 
                className={ styles['svg--bottle'] }
                xmlns="http://www.w3.org/2000/svg" 
                version="1.1" 
                x="0px" 
                y="0px" 
                viewBox="0 0 362.664 362.664">

                <filter id='noiseFilter' x="-10%" y="-10%" width="120%" height="120%">
                    <feTurbulence 
                        type='fractalNoise' 
                        baseFrequency='0.005' 
                        numOctaves='0.5'
                        seed="1"
                        stitchTiles='stitch'
                    />
                </filter>

                <mask id="gradient-mask">
                    <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
                </mask>

                <path id={ styles['bottle__path'] }
                    fill={ liquidColor }
                    d="M326.197,217.684c0-14.664-2.472-29.243-7.346-43.334l-1.63-4.711h-0.119c-4.807-12.383-11.477-24.266-19.923-35.369     c-16.07-21.126-37.974-38.302-62.301-48.985c-1.015-0.446-3.057-1.059-3.057-4.892l-0.392-25.177h6.549     c8.759,0,15.886-7.126,15.886-15.885V15.886C253.864,7.127,246.738,0,237.978,0H125.686c-8.759,0-15.885,7.127-15.885,15.886     v23.445c0,8.759,7.126,15.885,15.885,15.885h5.625L131.23,80.06c0,3.75-2.221,4.689-3.323,5.172     c-24.308,10.644-46.197,27.762-62.283,48.842c-8.515,11.159-15.232,23.107-20.067,35.564h-0.119l-1.629,4.712     c-4.872,14.089-7.342,28.668-7.342,43.333c0,0.018,0,0.036,0,0.053c0,0.021,0,0.042,0,0.063     c0,79.879,64.986,144.865,144.865,144.865s144.865-64.986,144.865-144.865c0-0.021,0-0.042,0-0.063     C326.197,217.72,326.197,217.702,326.197,217.684z M202.109,272.231c0-7.348,5.957-13.305,13.305-13.305     s13.305,5.957,13.305,13.305s-5.957,13.305-13.305,13.305S202.109,279.579,202.109,272.231z M228.718,213.922     c0-12.15,9.85-22,22-22s22,9.85,22,22s-9.85,22-22,22S228.718,226.072,228.718,213.922z M140.66,95.165     c0,0,4.543-2.022,4.543-7.522c0-9.792,0.127-27.917,0.127-39.166c0-7.5-6.831-7.261-6.831-7.261h-12.813     c-1.022,0-1.885-0.863-1.885-1.885V15.886c0-1.022,0.863-1.886,1.885-1.886h112.292c1.022,0,1.886,0.864,1.886,1.886v23.445     c0,1.022-0.864,1.885-1.886,1.885h-13.146c0,0-7.473,0.552-7.473,8.929c0,10.874,0.592,28.679,0.592,38.241     c0,5.757,4.469,6.934,4.469,6.934c32.593,12.269,59.116,36.124,74.668,64.853c1.679,3.102,4.577,9.466-4.089,9.466h-225.5     c-6.833,0-3.513-6.596-1.764-9.807C81.372,131.122,107.979,107.339,140.66,95.165z"
                    // mask='url(#gradient-mask)'
                    ></path>
            </svg>
    );
};