import { ajax } from 'rxjs/ajax'
import { map, mergeMap, delay, takeUntil, take, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { ofType } from 'redux-observable'
// test async

// Actions
const FETCH_FROM_BACKEND = 'fetch_from_backend'
const FETCH_COMPLETE = 'fetch_complete'
const FETCH_CANCELLED = 'fetch_cancelled'
const FETCH_ERROR = 'fetch_error'

//reducer
const initialState = {
    data: null,
    error: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'fetch_from_backend':
            return {
                ...state
            }
        case 'fetch_complete':
            return {
                ...state,
                data: action.data
            }
        case 'fetch_cancelled':
            return {
                ...state
            }
        case 'fetch_error':
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

// Action creators
export const fetchFromBackend = () => ({ type: FETCH_FROM_BACKEND })
export const fetchComplete = res => ({ type: FETCH_COMPLETE, data: res })
export const fetchCancelled = () => ({ type: FETCH_CANCELLED })
export const fetchError = err => ({})

// Epics
export const testAsyncEpic = action$ => action$.pipe(
    ofType(FETCH_FROM_BACKEND),
    mergeMap(action =>
        ajax.getJSON('/api/test').pipe(
            map(response => fetchComplete(response)),
            takeUntil(action$.pipe(
                ofType(FETCH_CANCELLED)
            )),
            catchError(err => of({
                type: FETCH_ERROR,
                error: err
            }))
        )
    )
)