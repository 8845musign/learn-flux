import * as types from './ActionTypes';

export function increment(num) {
    return { type : types.INCREMENT, data: num }
}