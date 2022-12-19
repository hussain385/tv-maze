import {IShowDetail, IShowInfo} from "../../interfaces/showInterfaces";
import {SHOW_DETAILS, SHOW_INFO} from "../actions/types";

interface showInfoProps {
    showInfo: IShowInfo[];
    showDetails: IShowDetail | undefined
}

const INIT_STATE: showInfoProps = {
    showInfo: [],
    showDetails: undefined
};

export default (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case SHOW_INFO:
            return { ...state, showInfo: action.payload };
        case SHOW_DETAILS:
            return { ...state, showDetails: action.payload };
        default:
            return state;
    }
};
