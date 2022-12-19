import { combineReducers } from 'redux';
import showReducers from "./reducers/showReducers";
import {showListApis} from "./apis/showsInfoApi";

const reducer = combineReducers({
    showList: showReducers,
    [showListApis.reducerPath]: showListApis.reducer
});

export default reducer;
