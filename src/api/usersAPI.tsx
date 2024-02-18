import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/user.model";

export const usersAPI = createApi({
  reducerPath: "usersAPI",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/" }),
  endpoints: (builder) => ({
    users: builder.query<User[], number>({
      query: (page) => `/api/users?page=${page}`,
      providesTags: ["User"],
    }),
    user: builder.query<User[], number>({
      query: (id) => `/api/users/${id}`,
      providesTags: ["User"],
    }),
    addUser: builder.mutation<void, User>({
      query: (user) => ({
        url: "/api/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation<void, User>({
      query: ({ id, ...rest }) => ({
        url: `/api/users/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `/api/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useUsersQuery,
  useUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersAPI;
