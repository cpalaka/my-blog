import { createStore, applyMiddleware } from 'redux'
import { rootReducer, rootEpic } from './modules/root'
import { createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger'

const epicMiddleware = createEpicMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(
        epicMiddleware,
        logger
    ))

epicMiddleware.run(rootEpic)

export default store