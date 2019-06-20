import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
    describe('Strike Button', () => {
        it('Should increase strikes by one ', () => {
            const { getByText, queryByText } = render(<Dashboard />);

            const strikeButton = getByText(/add strike/i);

            fireEvent.click(strikeButton);

            expect(queryByText(/Strikes: 1/i)).toBeTruthy();

            fireEvent.click(strikeButton);

            expect(queryByText(/Strikes: 2/i)).toBeTruthy();

            fireEvent.click(strikeButton);

            expect(queryByText(/Strikes: 0/i)).toBeTruthy();

        });

    });

    describe('Ball Button', () => {
        it('Should increase balls by one ', () => {
            const { getByText, queryByText } = render(<Dashboard />);

            const ballButton = getByText(/add ball/i);

            fireEvent.click(ballButton);

            expect(queryByText(/balls: 1/i)).toBeTruthy();

            fireEvent.click(ballButton);

            expect(queryByText(/balls: 2/i)).toBeTruthy();

            fireEvent.click(ballButton);

            expect(queryByText(/balls: 3/i)).toBeTruthy();

            fireEvent.click(ballButton);

            expect(queryByText(/balls: 0/i)).toBeTruthy()

        });

    });

    describe('Foul Button', () => {
        it('Should increase strikes by one if there are one or fewer strikes ', () => {
            const { getByText, queryByText } = render(<Dashboard />);

            const foulButton = getByText(/add foul/i);

            fireEvent.click(foulButton);

            expect(queryByText(/strikes: 1/i)).toBeTruthy();

            fireEvent.click(foulButton);

            expect(queryByText(/strikes: 2/i)).toBeTruthy();

            fireEvent.click(foulButton);

            expect(queryByText(/strikes: 2/i)).toBeTruthy();

        });

    });

})