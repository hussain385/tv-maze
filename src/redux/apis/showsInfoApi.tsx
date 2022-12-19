import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

export const showListApis = createApi({
    reducerPath: 'showListInfo',
    tagTypes: ['showList'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_API_SERVER_URL}`,
    }),
    endpoints: (builder) => ({
        getShowListByDate: builder.query<any, string>({
            query(query) {
                return {
                    url: `/schedule/${query}`,
                    method: 'GET',
                };
            },
        }),
        getShowInfoById: builder.query<any, string>({
            query(code) {
                return {
                    url: `/shows/${code}?embed=cast`,
                    method: 'GET',
                };
            },
        }),
    }),
});

export const {useGetShowListByDateQuery, useGetShowInfoByIdQuery} = showListApis
