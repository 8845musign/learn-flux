import * as actionTypes from './ActionTypes'

const initialState = {
    count: 0
};

export function counter(state = initialState, action) {
    switch (action.type) {
        case actionTypes.INCREMENT:
            state.count += action.data;
            return state
            break;
        default:
            return state
            break;
    }
}