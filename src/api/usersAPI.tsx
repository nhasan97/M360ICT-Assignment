import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/user.model";

export const usersAPI = createApi({
  reducerPath: "usersAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/" }),
  endpoints: (builder) => ({
    users: builder.query<User[], void>({
      query: () => "/api/users?page=2",
    }),
  }),
});

export const { useUsersQuery } = usersAPI;
