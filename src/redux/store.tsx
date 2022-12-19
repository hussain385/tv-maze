import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from "./index";
import {showListApis} from "./apis/showsInfoApi";

export const store = configureStore({
    reducer: reducer,
    //devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}).concat(
            // concat by default makes is an array
            showListApis.middleware,
            logger,
        ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
