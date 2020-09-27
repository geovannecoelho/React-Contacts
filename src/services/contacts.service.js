import axios from 'axios';
import authService from "./auth.service";

const apiUrl = "https://contacts-cative.herokuapp.com/api";

const contactsService = {
  headers: {
    headers: {
      authorization: "Bearer " + authService.getLoggedUser()?.token,
    },
  },
  async list() {
    const enpoint = apiUrl + "/contacts";
 
    return axios.get(enpoint, this.headers);
  },

  async getOne(contactId) {
    const enpoint = apiUrl + "/contacts/" + contactId;
    return axios.get(enpoint, this.headers);
  },

  async create(data) {
    const enpoint = apiUrl + "/contacts";
    return axios.post(enpoint, data);
  },

  async edit(data, contactId) {
    const enpoint = apiUrl + "/contacts/" + contactId;
    return axios.put(enpoint, data);
  },

  async delete(contactId) {
    const enpoint = apiUrl + "/contacts/" + contactId;
    return axios.delete(enpoint);
  },
};

export default contactsService;