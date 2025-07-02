import { apiSlice } from "./base-query";
import { User } from "@/types/user";
import { Assignment } from "@/types/assignment";

export const referenceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCoordinators: builder.query<User[], void>({
      query: () => ({
        url: "/reference/user/coordinator",
        method: "GET",
      }),
      transformResponse: (response: {
        code: number;
        message: string;
        data: { current_page: number; data: User[] };
      }) => response.data.data,
    }),

    getAllSales: builder.query<User[], void>({
      query: () => ({
        url: "/reference/user/sales",
        method: "GET",
      }),
      transformResponse: (response: {
        code: number;
        message: string;
        data: { current_page: number; data: User[] };
      }) => response.data.data,
    }),

    getUnassignedSales: builder.query<User[], void>({
      query: () => ({
        url: "/reference/user/sales/not-assigned",
        method: "GET",
      }),
      transformResponse: (response: {
        code: number;
        message: string;
        data: { current_page: number; data: User[] };
      }) => response.data.data,
    }),

    getSalesByCoordinatorId: builder.query<User[], number>({
      query: (id) => ({
        url: `/reference/user/coordinator/${id}/sales`,
        method: "GET",
      }),
      transformResponse: (response: {
        code: number;
        message: string;
        data: { current_page: number; data: User[] };
      }) => response.data.data,
    }),

    // ✅ New: Get All Assignments for Coordinator
    getCoordinatorAssignments: builder.query<Assignment[], void>({
      query: () => ({
        url: "/coordinator/assignments",
        method: "GET",
      }),
      transformResponse: (response: {
        code: number;
        message: string;
        data: { current_page: number; data: Assignment[] };
      }) => response.data.data,
    }),
  }),
});

export const {
  useGetAllCoordinatorsQuery,
  useGetAllSalesQuery,
  useGetUnassignedSalesQuery,
  useGetSalesByCoordinatorIdQuery,
  useGetCoordinatorAssignmentsQuery, 
} = referenceApi;
