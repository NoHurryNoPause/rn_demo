import axios from 'axios'
import { Dispatch } from 'redux'
import { ContactDispatchTypes, CONTACT_LOADING, CONTACT_FAIL, CONTACT_SUCCESS, ContactType } from './ContactTypes'

export const getContacts = () => async (dispatch: Dispatch<ContactDispatchTypes>) => {
    try {
        dispatch({
            type: CONTACT_LOADING
        })
        const res = await axios
            .get("https://randomuser.me/api/?results=20")
        dispatch({
            type: CONTACT_SUCCESS,
            payload: <ContactType[]> res.data.results.filter((contact: ContactType) => contact.id.value !== null)
        })
    } catch(e) {
        dispatch({
            type: CONTACT_FAIL,
            error: e
        })
    }
}