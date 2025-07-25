import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Auth, AuthData } from '../classes/Auth';

type loginAttempt = {
    email: string
    password: string
}

export const authApi = createApi({
    reducerPath: 'authApi',
    // Use same-origin proxy via Vite so cookies are on the client origin
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/',
        credentials: 'include',
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