import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'components/Modal/Modal';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactsList } from './../components/ContactsList/ContactsList';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';

import { ContactsCount } from './../components/ContactsCount/ContactsCount';
import { AddContactButton } from './../components/AddContactButton/AddContactButton';
import {
  ContactBar,
  ContactContainer,
  LoadingProgress,
  contactsAddBtn,
} from './PageStyles/Contacts.styled';
import { useContacts } from 'components/hooks/useContacts';

const Contacts = () => {
  const [modalShow, setModalShow] = useState(false);
  const [contactId, setContactId] = useState(null);
  const { contactOperationLoading, contacts } = useContacts();

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
        {contacts.length > 0 && <ContactsFilter />}

        {contacts.length > 0 && (
          <AddContactButton
            modalToggle={modalToggle}
            btnStyles={contactsAddBtn}
          />
        )}
      </ContactBar>

      {contactOperationLoading && <LoadingProgress size="xs" isIndeterminate />}
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
