import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://product-back-lime.vercel.app/",
  }),
  tagTypes: ["product", "cart"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (filters) => {
        const { category, price, brand } = filters || {};
        const queryParams = new URLSearchParams();

        if (category) queryParams.append("category", category);
        if (price) queryParams.append("price", price);
        if (brand) queryParams.append("brand", brand);

        // console.log(category, price, brand); // Debugging
        // console.log(queryParams.toString()); // Debugging

        return {
          url: `/product?${queryParams.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),

    updateProduct: builder.mutation({
      query: (options) => ({
        url: `product/${options?._id}`,
        method: "PUT",
        body: options,
      }),
      invalidatesTags: ["product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    // Cart endpoints
    getCart: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
      providesTags: ["cart"],
    }),
    addToCart: builder.mutation({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cart"],
    }),
    updateCart: builder.mutation({
      query: (options) => ({
        url: `/cart/${options?._id}`,
        method: "PUT",
        body: options.data,
      }),
      invalidatesTags: ["cart"],
    }),
    deleteFromCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartMutation,
  useDeleteFromCartMutation,
} = baseApi;
