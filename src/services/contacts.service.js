import axios from 'axios';

const apiUrl = "http://localhost:8000/api/contacts"

const contactsService = {

    async list(){
        const enpoint = apiUrl + "/contacts"
        return axios.get(enpoint)
    },

    async getOne(contactId){
        const enpoint = apiUrl + "/contacts/" + contactId
        return axios.get(enpoint)
    },

    async create(data){
        const enpoint = apiUrl + "/contacts"
        return axios.post(enpoint, data)
    },

    async edit(data, contactId){
        const enpoint = apiUrl + "/contacts/" + contactId
        return axios.put(enpoint, data)
    },

    async delete(contactId){
        const enpoint = apiUrl + "/contacts/" + contactId
        return axios.delete(enpoint)
    },


}

export default contactsService;