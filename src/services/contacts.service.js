import axios from 'axios';

const apiUrl="http://localhost:8000/contacts"

const contactsService ={
  async list(){
    const endpoint = apiUrl + "/contacts"
    return axios.get(endpoint)
  },

  async getOne(contId){
    const endpoint = apiUrl + "/contacts/" + contId
    return axios.get(endpoint)

  },

}

export default contactsService;