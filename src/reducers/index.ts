import { ActionType } from "../actions/types";
export const reducer = (state = {}, action: ActionType) => {
    switch (action.type) {
        case 'GET_NEWS':
            return { ...state, loading: true }
        case 'NEWS_RECEIVED':
            return { ...state, news: action.payload, loading: false }
        default:
            return state
    }
}

export default reducer