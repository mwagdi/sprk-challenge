import { act, renderHook, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

import { useProductFormSubmit } from './useProductFormSubmit';

fetchMock.enableMocks();

describe('useProductFormSubmit', () => {
    afterEach(() => {
        fetchMock.mockClear();
    });

    it('should perform the form submission correctly', async () => {
        const code = 'test123';
        const formData = {
            description: 'New description'
        };

        // Mock the fetch response
        fetchMock.mockResponseOnce(
            JSON.stringify({
                data: {
                    editProduct: {
                        code
                        // Provide other fields based on the response of the mutation
                    }
                }
            })
        );

        // Render the hook using renderHook
        const { result } = renderHook(() => useProductFormSubmit());

        // Simulate the form submission
        act(() => {
            result.current.postData(code, formData);
        });

        // Wait for the hook to complete the form submission
        await waitFor(() => {
            // After the form submission, loading should be false
            expect(result.current.loading).toBe(false);
        });

        // Verify the response data
        expect(result.current.response).toEqual({
            code
            // Provide other fields based on the response of the mutation
        });

        // Error should be null if the submission is successful
        expect(result.current.error).toBeNull();
    });

    it('should handle form submission error correctly', async () => {
        const code = 'test123';
        const formData = {
            // Provide the necessary form data based on your schema
        };

        // Mock a fetch error
        fetchMock.mockRejectOnce(new Error('Fetch failed'));

        // Render the hook using renderHook
        const { result } = renderHook(() => useProductFormSubmit());

        // Simulate the form submission
        act(() => {
            result.current.postData(code, formData);
        });

        // Wait for the hook to handle the error
        await waitFor(() => {
            // After the form submission, loading should be false
            expect(result.current.loading).toBe(false);
        });

        // Response should be null if the submission failed
        expect(result.current.response).toBeNull();

        // Verify the error state
        expect(result.current.error).toEqual(new Error('Fetch failed'));
    });
});
