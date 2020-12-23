import axios from 'axios'

const getAll = () => {
    return axios.get('http://localhost:3001/persons')
}

const create = (newPersonObj) => {
    return axios.post('http://localhost:3001/persons', newPersonObj)
}

export default {
    getAll: getAll,
    create: create
}