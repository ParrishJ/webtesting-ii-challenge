import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
    describe('Strike Button', () => {
        it('Should increase strikes by one ', () => {
            const { getByText } = render(<Dashboard />);

            const strikeButton = getByText(/strike/i);

            fireEvent.click(strikeButton);


        });

    });

})