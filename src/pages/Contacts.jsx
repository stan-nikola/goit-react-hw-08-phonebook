import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'components/Modal/Modal';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactsList } from './../components/ContactsList/ContactsList';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';
import { Box, Button } from '@chakra-ui/react';
import { ContactsCount } from './../components/ContactsCount/ContactsCount';

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
    <Box pl={4} pr={4} display="flex">
      <Box display="flex" flexDirection="column">
        <ContactsCount />
        <ContactsFilter />

        <Button
          textAlign="center"
          borderRadius="none"
          mt={4}
          type="button"
          onClick={() => setModalShow(!modalShow)}
          isLoading={false}
          loadingText="Loading"
          colorScheme="teal"
          variant="solid"
          spinnerPlacement="start"
        >
          Add Contact
        </Button>
      </Box>

      <ContactsList modalToggle={modalToggle} />
      {modalShow && (
        <Modal onClose={() => setModalShow(!modalShow)}>
          <ContactForm
            modalToggle={() => setModalShow(!modalShow)}
            contactId={contactId}
          />
        </Modal>
      )}
    </Box>
  );
};
