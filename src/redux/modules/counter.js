// test counter

// Actions
const INCREMENT = 'increment'

// Reducer
const initialState = {
    count: 0
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'increment':
            return {
                count: state.count + 1
            }
        default:
            return state
    }
}
// export counter

//Action Creators
export const increment = () => ({ type: INCREMENT })