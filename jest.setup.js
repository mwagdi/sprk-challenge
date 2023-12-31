import fetchMock from 'jest-fetch-mock';

import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

fetchMock.enableMocks(); // Enable fetch mocking

beforeEach(() => {
    fetchMock.resetMocks(); // Reset the fetch mocks before each test
});