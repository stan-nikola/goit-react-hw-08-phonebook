import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'components/Modal/Modal';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactsList } from './../components/ContactsList/ContactsList';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';

import { ContactsCount } from './../components/ContactsCount/ContactsCount';
import { AddContactButton } from './../components/AddContactButton/AddContactButton';
import { ContactBar, ContactContainer } from './PageStyles/Contacts.styled';

const Contacts = () => {
  const [modalShow, setModalShow] = useState(false);
  const [contactId, setContactId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const modalToggle = e => {
    setModalShow(!modalShow);
    if (typeof e === 'object') {
      setContactId(null);
      return;
    }
    setContactId(e);
  };

  return (
    <ContactContainer>
      <ContactBar>
        <ContactsCount />
        <ContactsFilter />
        <AddContactButton modalToggle={modalToggle} />
      </ContactBar>

      <ContactsList modalToggle={modalToggle} />
      {modalShow && (
        <Modal modalToggle={modalToggle}>
          <ContactForm modalToggle={modalToggle} contactId={contactId} />
        </Modal>
      )}
    </ContactContainer>
  );
};

export default Contacts;
