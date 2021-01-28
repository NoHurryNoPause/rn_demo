import { combineReducers } from "redux"
import contactReducer from "./ContactReducer"

const RootReducer = combineReducers({
    contact: contactReducer
})

export default RootReducer