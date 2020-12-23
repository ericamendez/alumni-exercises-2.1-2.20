import axios from 'axios'

const BASE_URL = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(BASE_URL)
}

const createContact = (newPersonObj) => {
    return axios.post(BASE_URL, newPersonObj)
}

const updateContact = (id, contactUpdate) => {
    return axios.put(`${BASE_URL}/${id}`, contactUpdate)
}

const deleteContact = (id) => {
    return axios.delete(`${BASE_URL}/${id}`)
}

export default {
    getAll: getAll,
    createContact: createContact,
    updateContact: updateContact,
    deleteContact: deleteContact
}