import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { TaskReducer, TaskReducerState } from './reducers'
import rootTaskMiddlewares from './middlewares/Task'

export interface Reducer {
  tasks: TaskReducerState
}

const reducer = combineReducers({
  tasks: TaskReducer,
})

const middleware = createSagaMiddleware()

export default createStore(reducer, applyMiddleware(middleware))

middleware.run(rootTaskMiddlewares)
