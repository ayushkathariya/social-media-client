import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_SERVER_BASE_URL,
  }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (body) => ({
        method: "POST",
        url: "/api/auth/login",
        body,
      }),
    }),
    userSignup: builder.mutation({
      query: (body) => ({
        method: "POST",
        url: "/api/auth/signup",
        body,
      }),
    }),
    userVerify: builder.mutation({
      query: (body) => {
        return {
          method: "POST",
          url: "/api/auth/verify-otp",
          body,
        };
      },
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserSignupMutation,
  useUserVerifyMutation,
} = authApi;
