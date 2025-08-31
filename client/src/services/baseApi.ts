import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Function to get CSRF token from cookies
const getCSRFToken = (): string | null => {
    const name = 'csrftoken';
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
};

// Base query configuration that can be reused across all APIs
export const baseQuery = fetchBaseQuery({
    baseUrl: '/api/',
    credentials: 'include',
    prepareHeaders: (headers) => {
        const csrfToken = getCSRFToken();
        if (csrfToken) {
            headers.set('X-CSRFToken', csrfToken);
        }
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        return headers;
    },
});

// Base API that other APIs can extend
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery,
    tagTypes: ['Auth', 'Room'], // Add more as needed
    endpoints: () => ({}),
});
