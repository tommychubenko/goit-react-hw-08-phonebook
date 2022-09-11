import React from 'react';

const ContactsList = ({ filter, contacts, deleteContact }) => {
  return (
    <div className="markup">
      {contacts && (
        <ul className="contact_list">
          {contacts
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
                      deleteContact(id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default ContactsList;
