import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Auth, AuthData } from '../classes/Auth';

type loginAttempt = {
    email: string
    password: string
}

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

export const authApi = createApi({
    reducerPath: 'authApi',
    // Use same-origin proxy via Vite so cookies are on the client origin
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/',
        credentials: 'include',
        prepareHeaders: (headers) => {
            const csrfToken = getCSRFToken();
            if (csrfToken) {
                headers.set('X-CSRFToken', csrfToken);
            }
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials: loginAttempt) => ({
                url: 'login/',
                method: 'POST',
                contentType: 'application/json',
                body: {
                    email: credentials.email,
                    password: credentials.password,
                },
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'logout/',
                method: 'POST',
            }),
        }),
        getUser: builder.query<Auth, void>({
            query: () => ({
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                url: 'auth/',
            }),
            transformResponse: (response: AuthData): Auth => {
                return new Auth(response);
            },
        }),
    }),
})

export const { useLoginMutation, useLogoutMutation, useGetUserQuery } = authApi