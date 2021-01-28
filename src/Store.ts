import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer from './reducers/RootReducers'
import thunk from 'redux-thunk'

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootStore = ReturnType<typeof RootReducer>

export default store