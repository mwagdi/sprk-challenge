import React from 'react';
import { render, screen } from '@testing-library/react';

import ScanResult from './ScanResult';

describe('ScanResult', () => {
    describe('While scanning', () => {
        it('should render "Scanning..."', () => {
            render(<ScanResult isScanning={true} isAvailable={false} />);
            expect(screen.getByText('Scanning...')).toBeInTheDocument();
            expect(screen.queryByText('GTIN:')).not.toBeInTheDocument();
            expect(screen.queryByText('Product found')).not.toBeInTheDocument();
            expect(screen.queryByText('Product not found')).not.toBeInTheDocument();
            expect(screen.queryByRole('link')).not.toBeInTheDocument();
        });
    });

    describe('Scan is done', () => {
        describe('Product is found', () => {
            it('should render GTIN and "Product found" message', () => {
                render(<ScanResult isScanning={false} isAvailable={true} code="123" />);
                expect(screen.queryByText('Scanning...')).not.toBeInTheDocument();
                expect(screen.getByText('GTIN: 123')).toBeInTheDocument();
                expect(screen.getByText('Product found')).toBeInTheDocument();
                expect(screen.queryByText('Product not found')).not.toBeInTheDocument();
            });
            
            it('should render "Edit Product" link', () => {
                render(<ScanResult isScanning={false} isAvailable={true} code="123" />);
                expect(screen.getByRole('link')).toBeInTheDocument();
                expect(screen.getByRole('link')).toHaveAttribute('href', '/123');
            });
        });

        describe('Product is not found', () => {
            it('should render GTIN and "Product not found" message', () => {
                render(<ScanResult isScanning={false} isAvailable={false} code="123" />);
                expect(screen.queryByText('Scanning...')).not.toBeInTheDocument();
                expect(screen.getByText('GTIN: 123')).toBeInTheDocument();
                expect(screen.getByText('Product not found')).toBeInTheDocument();
                expect(screen.queryByText('Product found')).not.toBeInTheDocument();
                expect(screen.queryByRole('link')).not.toBeInTheDocument();
            });
        });
    });
});
