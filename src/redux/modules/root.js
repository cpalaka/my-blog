import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import counter from './counter'
import testAsync, { testAsyncEpic } from './testAsync'

export const rootReducer = combineReducers({
    counter: counter,
    testAsync
})

export const rootEpic = combineEpics(
    testAsyncEpic
)