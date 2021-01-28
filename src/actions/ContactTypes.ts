export const CONTACT_FAIL = "CONTACTS_FAIL"
export const CONTACT_LOADING = "CONTACTS_LOADING"
export const CONTACT_SUCCESS = "CONTACTS_SUCCESS"

export type Name = {
    "first": string
    "last": string
}

export type Id = {
    "value": string
}

export type Picture = {
    "large": string
}

export type Location = {
    "city": string
    "state": string,
    "postcode": string,
    "country": string
}

export type ContactType = {
    "id": Id
    "name": Name,
    "picture": Picture,
    "email": string,
    "location": Location
}

export interface ContactLoading {
    type: typeof CONTACT_LOADING
}

export interface ContactFail {
    type: typeof CONTACT_FAIL,
    error: Error
}
export interface ContactSuccess {
    type: typeof CONTACT_SUCCESS,
    payload: ContactType[]
}

export type ContactDispatchTypes = ContactLoading | ContactFail | ContactSuccess