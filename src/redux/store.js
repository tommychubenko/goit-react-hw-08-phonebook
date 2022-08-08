import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const checkExistContacts = (state, data) => {
  for (const contact of state) {
    if (contact.name.toLowerCase() === data.name.toLowerCase()) {
      return Notify.failure(`${data.name} Is already in your contact list!`);
    }
  }
  return state.unshift(data);
};

// const deleteContact = (state, action) => {
//   return state.filter(contact => contact.id !== action);
// };

const deleteContact = (state, action) => {
  return state.filter(contact => contact.id !== action);
};

const mySlice = createSlice({
  name: 'Contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    handleAddContact(state, action) {
      checkExistContacts(state, action.payload);
    },
    handleRemoveContact(state, action) {
      deleteContact(state, action.payload);
    },
  },
});

export const store = configureStore({
  reducer: { contacts: mySlice.reducer },
});

export const { handleAddContact, handleRemoveContact } = mySlice.actions;
