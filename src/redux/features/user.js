import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { KEY_ACCESS_TOKEN, getItem } from "../../utils/localStorageManager";

const accessToken = getItem(KEY_ACCESS_TOKEN);

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_SERVER_BASE_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => ({
        method: "GET",
        url: "/api/users/me",
      }),
      providesTags: ["User"],
    }),
    getUserById: builder.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/api/users/${id.userId}`,
        };
      },
      providesTags: ["User"],
    }),
    getPosts: builder.query({
      query: () => ({
        method: "GET",
        url: "/api/posts",
      }),
      providesTags: ["User"],
    }),
    getPostById: builder.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/api/posts/${id}`,
        };
      },
      providesTags: ["User"],
    }),
    getUserSuggestions: builder.query({
      query: () => ({
        method: "GET",
        url: "/api/users/suggestions",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useGetPostsQuery,
  useGetUserSuggestionsQuery,
  useGetUserByIdQuery,
  useGetPostByIdQuery,
} = userApi;
