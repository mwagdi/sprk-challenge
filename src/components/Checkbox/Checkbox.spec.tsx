import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
    it('should render the checkbox with the correct label', () => {
        const label = 'Check me';
        render(<Checkbox label={label} name="testCheckbox" onChange={() => {}} />);
        const checkbox = screen.getByLabelText(label);

        expect(checkbox).toBeInTheDocument();
        expect(checkbox.getAttribute('type')).toBe('checkbox');
    });

    it('should be checked when `checked` prop is true', () => {
        const label = 'Check me';
        render(<Checkbox label={label} name="testCheckbox" checked={true} onChange={() => {}} />);
        const checkbox = screen.getByLabelText(label);

        expect(checkbox).toBeChecked();
    });

    it('should call the onChange function when checkbox is clicked', () => {
        const label = 'Check me';
        const handleChange = jest.fn();
        render(<Checkbox label={label} name="testCheckbox" onChange={handleChange} />);
        const checkbox = screen.getByLabelText(label);

        fireEvent.click(checkbox);

        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
