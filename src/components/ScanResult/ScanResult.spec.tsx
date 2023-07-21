import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extended expect matchers
import ScanResult from './ScanResult';

describe('ScanResult', () => {
    describe('Product is not available', () => {
        it('should render GTIN and "Product not found" message', () => {
            const code = '1234567890';

            render(<ScanResult code={code} />);

            expect(screen.getByText(`GTIN: ${code}`)).toBeInTheDocument();
            expect(screen.getByText('Product not found')).toBeInTheDocument();
            expect(screen.queryByText('Product found')).not.toBeInTheDocument();
        });

        it('should not render Link', () => {
            const code = '1234567890';

            render(<ScanResult code={code} />);

            expect(screen.queryByRole('link')).not.toBeInTheDocument();
        });
    });

    describe('Product is available', () => {
        test('should render GTIN and "Product found" message', () => {
            const code = '9876543210';
            const product = '9876543210';

            render(<ScanResult code={code} product={product} />);

            expect(screen.getByText(`GTIN: ${code}`)).toBeInTheDocument();
            expect(screen.getByText('Product found')).toBeInTheDocument();
            expect(screen.queryByText('Product not found')).not.toBeInTheDocument();
        });

        test('should render Link', () => {
            const code = '9876543210';
            const product = '9876543210';

            render(<ScanResult code={code} product={product} />);

            expect(screen.getByRole('link')).toBeInTheDocument();
            expect(screen.getByRole('link')).toHaveAttribute('href', `/${product}`);
        });
    });
});
