import axios from 'axios';

export const getContacts = async () =>
  await axios.get('contacts').then(r => r.data);

export const addContact = contact => axios.post(`contacts`, contact);

export const deleteCOntact = id => {
  axios.delete(`contacts/${id}`);
};
