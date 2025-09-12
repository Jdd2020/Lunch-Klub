import { CreateRoomRequest, Room, RoomClass } from '../classes/Room';
import { baseApi } from './baseApi';

export const roomsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getRooms: builder.query<RoomClass[], void>({
            query: () => ({
                url: 'rooms/',
                method: 'GET',
            }),
            transformResponse: (response: Room[]): RoomClass[] => {
                return response.map(room => new RoomClass(room));
            },
            providesTags: ['Room'],
        }),
        createRoom: builder.mutation<RoomClass, CreateRoomRequest>({
            query: (roomData) => ({
                url: 'rooms/',
                method: 'POST',
                body: roomData,
            }),
            transformResponse: (response: Room): RoomClass => {
                return new RoomClass(response);
            },
            invalidatesTags: ['Room'],
        }),
        getRoom: builder.query<RoomClass, string>({
            query: (roomId) => ({
                url: `rooms/${roomId}/`,
                method: 'GET',
            }),
            transformResponse: (response: Room): RoomClass => {
                return new RoomClass(response);
            },
            providesTags: ['Room'],
        }),
        updateRoom: builder.mutation<RoomClass, { id: string; data: Partial<CreateRoomRequest> }>({
            query: ({ id, data }) => ({
                url: `rooms/${id}/`,
                method: 'PATCH',
                body: data,
            }),
            transformResponse: (response: Room): RoomClass => {
                return new RoomClass(response);
            },
            invalidatesTags: ['Room'],
        }),
        deleteRoom: builder.mutation<void, string>({
            query: (roomId) => ({
                url: `rooms/${roomId}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Room'],
        }),
    }),
});

export const {
    useGetRoomsQuery,
    useCreateRoomMutation,
    useGetRoomQuery,
    useUpdateRoomMutation,
    useDeleteRoomMutation,
} = roomsApi;
