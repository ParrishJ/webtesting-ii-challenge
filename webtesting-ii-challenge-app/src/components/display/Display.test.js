import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Display from './Display'

describe('<Display />', () => {
    it('Should display the word "Strikes" ', () => {
        const { getByText } = render(<Display />);

        getByText(/strikes/i);
    });

    it('Should display the word "balls" ', () => {
        const { getByText } = render(<Display />);

        getByText(/balls/i);
    });

    it('Should display the word "fouls" ', () => {
        const { getByText } = render(<Display />);

        getByText(/fouls/i);
    });

    it('Should display the word "hits" ', () => {
        const { getByText } = render(<Display />);

        getByText(/hits/i);
    });
});