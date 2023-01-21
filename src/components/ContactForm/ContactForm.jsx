import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { addContact } from 'redux/contacts/operations';
import { useContacts } from 'components/hooks/useContacts';
import { updateContact } from './../../redux/contacts/operations';

export const ContactForm = ({ modalToggle, contactId }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const { contacts } = useContacts();

  useEffect(() => {
    if (!contactId) return;
    const finnedContactById = contacts.find(
      contact => contact.id === contactId
    );
    setName(finnedContactById.name);
    setNumber(finnedContactById.number);
  }, [contactId, contacts]);

  const handleSubmit = e => {
    e.preventDefault();

    if (!contactId) {
      dispatch(addContact({ name, number }));
    } else {
      dispatch(updateContact({ contactId, name, number }));
    }
  };

  return (
    <>
      <button type="button" onClick={modalToggle}>
        Close
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
        />
        <PhoneInput
          type="phone"
          country={'ua'}
          value={number}
          onChange={e => setNumber(e)}
        />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  modalToggle: PropTypes.func.isRequired,
};
