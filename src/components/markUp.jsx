const contactsList = ({ contacts, filter, del }) => {
  return (
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
                  del(id);
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

export default contactsList;
