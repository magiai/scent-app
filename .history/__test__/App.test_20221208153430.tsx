import { render, screen } from '@testing-library/react';
import React from 'react';
import MyApp from '../pages/_app';
import type { AppProps } from 'next/app';

describe('App tests', () => {
    it('should contains the heading 1', () => {
    render(<MyApp {...AppProps}/>);
        const heading = screen.getByText(/Hello world! I am using React/i);
        expect(heading).toBeInTheDocument()
    });
});