import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { FormInput } from './FormInput';

describe('FormInput', () => {
    it('should render a text input with the correct label', () => {
        const label = 'Text Input';
        render(<FormInput label={label} type="text" name="text_input" onChange={() => {}} />);
        const input = screen.getByLabelText(label);

        expect(input).toBeInTheDocument();
        expect(input.tagName).toBe('INPUT');
        expect(input.getAttribute('type')).toBe('text');
    });

    it('should render a number input with the correct label', () => {
        const label = 'Number Input';
        render(<FormInput label={label} type="number" name="number_input" onChange={() => {}} />);
        const input = screen.getByLabelText(label);

        expect(input).toBeInTheDocument();
        expect(input.tagName).toBe('INPUT');
        expect(input.getAttribute('type')).toBe('number');
    });

    it('should render a date input with the correct label', () => {
        const label = 'Date Input';
        render(<FormInput label={label} type="date" name="date_input" onChange={() => {}} />);
        const input = screen.getByLabelText(label);

        expect(input).toBeInTheDocument();
        expect(input.tagName).toBe('INPUT');
        expect(input.getAttribute('type')).toBe('date');
    });

    it('should have the correct initial value', () => {
        const label = 'Text Input';
        const initialValue = 'Initial';
        render(
            <FormInput label={label} type="text" name="text_input" value={initialValue} onChange={() => {}} />
        );
        const input = screen.getByLabelText(label) as HTMLInputElement;

        expect(input).toBeInTheDocument();
        expect(input.value).toBe(initialValue);
    });

    it('should call the onChange function when input value changes', () => {
        const label = 'Text Input';
        const handleChange = jest.fn();
        render(<FormInput label={label} type="text" name="text_input" onChange={handleChange} />);
        const input = screen.getByLabelText(label);

        const inputValue = 'New input';
        fireEvent.change(input, { target: { value: inputValue } });

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({ target: expect.objectContaining({ value: inputValue }) }));
    });
});
