const contactsList = ({ contacts, filter, del }) =>
  contacts
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
    });

export default contactsList;
