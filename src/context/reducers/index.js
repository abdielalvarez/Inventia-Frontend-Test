import { ACTIONS } from "../types";
import { initialState } from "../wrappers/ContextProvider";

export function apiReducer(state, action) {
    switch (action.type) {
        case ACTIONS.RESET:
            return initialState
        case ACTIONS.SET_DATA:
            return { ...state, data: action.payload, loading: false };
        case ACTIONS.SET_LOADING:
            return { ...state, loading: true, error: null };
        case ACTIONS.SET_ERROR:
            return { ...state, error: action.payload, loading: false };
        case ACTIONS.SET_LANGUAGE:
            return { ...state, language: action.payload };
        default:
            return state;
    }
}