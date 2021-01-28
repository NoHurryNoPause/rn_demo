import { ContactDispatchTypes, ContactType, CONTACT_FAIL, CONTACT_LOADING, CONTACT_SUCCESS } from "../actions/ContactTypes"

interface IDefaultState {
    status: string,
    contacts: ContactType[],
    error?: string | null
}

const defaultState: IDefaultState = {
    status: "idle",
    contacts: [],
    error: null
}

const contactReducer = (state: IDefaultState = defaultState, action: ContactDispatchTypes): IDefaultState => {
    switch(action.type) {
        case CONTACT_FAIL:
            return {
                ...state,
                status: "false"
            }
        case CONTACT_LOADING:
            return {
                ...state,
                status: "true"
            }
        case CONTACT_SUCCESS:
            return {
                ...state,
                status: "false",
                contacts: action.payload
            }
        default:
            return state
    }
}

export default contactReducer