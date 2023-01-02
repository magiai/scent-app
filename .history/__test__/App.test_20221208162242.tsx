import { render, screen } from '@testing-library/react';
import React from 'react';
import MyApp from '../pages/_app';

describe('App tests', () => {
    it('should contains the heading 1', () => {
    render(<MyApp />);
        const heading = screen.getByText(/Hello world! I am using React/i);
        expect(heading).toBeInTheDocument()
    });
});