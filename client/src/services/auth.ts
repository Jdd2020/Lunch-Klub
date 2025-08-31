import { Auth, AuthData } from '../classes/Auth';
import { baseApi } from './baseApi';

type loginAttempt = {
    email: string
    password: string
}

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials: loginAttempt) => ({
                url: 'login/',
                method: 'POST',
                body: {
                    email: credentials.email,
                    password: credentials.password,
                },
            }),
            invalidatesTags: ['Auth'],
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'logout/',
                method: 'POST',
            }),
            invalidatesTags: ['Auth'],
        }),
        getUser: builder.query<Auth, void>({
            query: () => ({
                method: 'GET',
                url: 'auth/',
            }),
            transformResponse: (response: AuthData): Auth => {
                return new Auth(response);
            },
            providesTags: ['Auth'],
        }),
    }),
})

export const { useLoginMutation, useLogoutMutation, useGetUserQuery } = authApi