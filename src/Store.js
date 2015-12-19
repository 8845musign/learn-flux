import {  createStore } from 'redux'
import { counter } from './Reducers'

export default function Store() {
    return createStore(counter);
}