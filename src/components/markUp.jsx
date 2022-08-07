import { useSelector, useDispatch } from 'react-redux';
import { handleRemoveContact } from '../redux/store';
import React from 'react';

const ContactsList = ({ filter }) => {
  const contactsFromRedux = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <ul className="contact_list">
      {contactsFromRedux
        .filter(({ name }) =>
          name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map(({ id, name, number }) => {
          return (
            <li key={id} className="contact_item">
              {name} : {number}
              <button
                className="del-btn"
                onClick={() => {
                  dispatch(handleRemoveContact(id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactsList;
