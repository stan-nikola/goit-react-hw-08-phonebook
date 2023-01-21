import { useMemo } from 'react';
import { useContacts } from 'components/hooks/useContacts';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactsList = ({ modalToggle }) => {
  const { contacts, filter } = useContacts();
  const dispatch = useDispatch();

  const visibleContacts = useMemo(
    () => contacts.filter(item => item.name.toLowerCase().includes(filter)),
    [contacts, filter]
  );

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>Name:{name}</p>
            <p>Number:{number}</p>
            <button type="button" onClick={() => handleDeleteContact(id)}>
              Delete
            </button>
            <button type="button" onClick={() => modalToggle(id)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
