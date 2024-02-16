import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/user.model";

export const usersAPI = createApi({
  reducerPath: "usersAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/" }),
  endpoints: (builder) => ({
    users: builder.query<User[], number>({
      query: (page) => `/api/users?page=${page}`,
    }),
  }),
});

export const { useUsersQuery } = usersAPI;
