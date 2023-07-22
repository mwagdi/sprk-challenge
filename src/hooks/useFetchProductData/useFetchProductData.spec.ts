import { renderHook, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

import { useFetchProductData } from './useFetchProductData';

fetchMock.enableMocks();

describe('useFetchProductData', () => {
    afterEach(() => {
        fetchMock.mockClear();
    });

    it('fetches product data and updates the state correctly', async () => {
        const mockProductData = {
            amount_multiplier: 2,
            brand: 'Test Brand',
            description: 'Test Description',
            edeka_article_number: '123',
            gross_weight: 0,
            net_weight: 10,
            packaging: 'Test Packaging',
            requires_best_before_date: false,
            requires_meat_info: false,
            trade_item_unit_descriptor: '_',
            trade_item_unit_descriptor_name: '__',
            validation_status: '___'
        };
        const code = 'test123';

        // Mock the fetch response
        fetchMock.mockResponseOnce(JSON.stringify({ data: { product: mockProductData } }));

        const { result } = renderHook(() => useFetchProductData(code));

        // Before the data is fetched, loading should be true
        expect(result.current.loading).toBe(true);
        expect(result.current.error).toBeNull();
        expect(result.current.data).toEqual({
            amount_multiplier: 0,
            brand: '',
            description: '',
            edeka_article_number: '',
            gross_weight: 0,
            net_weight: 0,
            packaging: '',
            requires_best_before_date: false,
            requires_meat_info: false,
            trade_item_unit_descriptor: '',
            trade_item_unit_descriptor_name: '',
            validation_status: ''
        });

        // Wait for the hook to complete the data fetching
        await waitFor(() => {
            // After fetching, loading should be false, and the data state should be updated
            expect(result.current.loading).toBe(false);
        });
        expect(result.current.error).toBeNull();
        expect(result.current.data).toEqual(mockProductData);
    });

    it('handles fetch error correctly', async () => {
        const code = 'test123';

        // Mock a fetch error
        fetchMock.mockRejectOnce(new Error('Fetch failed'));

        const { result } = renderHook(() => useFetchProductData(code));

        // Before the data is fetched, loading should be true
        expect(result.current.loading).toBe(true);
        expect(result.current.error).toBeNull();
        expect(result.current.data).toEqual({
            amount_multiplier: 0,
            brand: '',
            description: '',
            edeka_article_number: '',
            gross_weight: 0,
            net_weight: 0,
            packaging: '',
            requires_best_before_date: false,
            requires_meat_info: false,
            trade_item_unit_descriptor: '',
            trade_item_unit_descriptor_name: '',
            validation_status: ''
        });

        // Wait for the hook to complete the data fetching (even with an error)
        await waitFor(() => {
            // After fetching, loading should be false, and the error state should be set
            expect(result.current.loading).toBe(false);
        });
        expect(result.current.error).toEqual(new Error('Fetch failed'));
        expect(result.current.data).toEqual({
            amount_multiplier: 0,
            brand: '',
            description: '',
            edeka_article_number: '',
            gross_weight: 0,
            net_weight: 0,
            packaging: '',
            requires_best_before_date: false,
            requires_meat_info: false,
            trade_item_unit_descriptor: '',
            trade_item_unit_descriptor_name: '',
            validation_status: ''
        });
    });
});