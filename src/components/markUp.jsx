import { useSelector, useDispatch } from 'react-redux';
// import { handleRemoveContact } from '../redux/store';
import { useGetContactsByNameQuery } from 'redux/contactsApi';
import { useEffect } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import React from 'react';

const ContactsList = ({ filter }) => {
  // const [fetching, setFetching] = useState(false);
  // const contactsFromRedux = useSelector(state => state.contacts);
  // const dispatch = useDispatch();
  const { data, error, isLoading, isFetching } = useGetContactsByNameQuery();

  useEffect(() => {
    isFetching && Loading.circle('Loading contacts...');
    !isFetching && Loading.remove(750);
  }, [isFetching]);

  return (
    <div>
      {data && !error && (
        <ul className="contact_list">
          {data
            .filter(({ name }) =>
              name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
            )
            .map(({ id, name, phone }) => {
              return (
                <li key={id} className="contact_item">
                  {name} : {phone}
                  <button
                    className="del-btn"
                    onClick={() => {
                      // dispatch(handleRemoveContact(id));
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      )}
      {error && <h1>Contacts {error.data}</h1>}
    </div>
  );
};

export default ContactsList;
