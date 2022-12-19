import {IShowDetail, IShowInfo} from "../../interfaces/showInterfaces";
import {SHOW_DETAILS, SHOW_INFO} from "./types";

export const showTodayDateInfo = (data: IShowInfo[]) => {
  return (dispatch: any) => {
      dispatch({
          type: SHOW_INFO,
          payload: data
      })
  }
}

export const showDetailInfo = (data: IShowDetail) => {
    return (dispatch: any) => {
        dispatch({
            type: SHOW_DETAILS,
            payload: data
        })
    }
}
