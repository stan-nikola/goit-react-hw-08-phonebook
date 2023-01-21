import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'components/Modal/Modal';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactsList } from './../components/ContactsList/ContactsList';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';

export const Contacts = () => {
  const [modalShow, setModalShow] = useState(false);
  const [contactId, setContactId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const modalToggle = e => {
    setModalShow(!modalShow);
    setContactId(e);
  };

  return (
    <>
      <h1>Contacts</h1>
      <ContactsFilter />
      <br />
      <button type="button" onClick={() => setModalShow(!modalShow)}>
        Add Contact
      </button>
      {modalShow && (
        <Modal onClose={() => setModalShow(!modalShow)}>
          <ContactForm
            modalToggle={() => setModalShow(!modalShow)}
            contactId={contactId}
          />
        </Modal>
      )}
      <ContactsList modalToggle={modalToggle} />
    </>
  );
};
