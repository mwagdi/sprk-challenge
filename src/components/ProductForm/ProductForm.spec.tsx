import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { ProductForm } from './ProductForm';

describe('ProductForm', () => {
    const formData = {
        amount_multiplier: 2,
        brand: 'Test Brand',
        description: 'Test Description',
        edeka_article_number: '123456',
        gross_weight: 100,
        net_weight: 90,
        packaging: 'Test Packaging',
        requires_best_before_date: true,
        requires_meat_info: false,
        trade_item_unit_descriptor: 'Test Unit Descriptor',
        trade_item_unit_descriptor_name: 'Test Unit Descriptor Name',
        validation_status: 'Valid'
    };

    it('should call the handleSubmit function when the form is submitted', () => {
        const handleSubmit = jest.fn();
        render(<ProductForm formData={formData} handleChange={() => {}} handleSubmit={handleSubmit} />);

        fireEvent.submit(screen.getByText('Submit'));

        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
});
