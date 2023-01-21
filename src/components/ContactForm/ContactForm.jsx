import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { addContact } from 'redux/contacts/operations';
import { useContacts } from 'components/hooks/useContacts';
import { updateContact } from './../../redux/contacts/operations';
import {
  CloseModalBtn,
  Label,
  LabelName,
  ModalTitle,
  InputName,
} from './ContactForm.styled';
import { FiX } from 'react-icons/fi';
import { MdOutlineContactPhone } from 'react-icons/md';
import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

export const ContactForm = ({ modalToggle, contactId }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [submitButtonText, setSubmitButtonText] = useState('');

  const dispatch = useDispatch();

  const { contacts, contactOperationLoading } = useContacts(null);

  useEffect(() => {
    if (!contactId) return;
    const finnedContactById = contacts.find(
      contact => contact.id === contactId
    );
    setName(finnedContactById.name);
    setNumber(finnedContactById.number);
  }, [contactId, contacts]);

  useEffect(() => {
    if (!contactId) {
      setSubmitButtonText('Add contact');
    } else {
      setSubmitButtonText('Update contact');
    }
  }, [contactId]);

  const handleSubmit = e => {
    e.preventDefault();

    if (!contactId) {
      return dispatch(addContact({ name, number }));
    }
    dispatch(updateContact({ contactId, name, number }));
  };

  return (
    <>
      <ModalTitle>Enter name and phone number</ModalTitle>
      <CloseModalBtn type="button" onClick={modalToggle}>
        <FiX />
      </CloseModalBtn>
      <Box
        as="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        onSubmit={handleSubmit}
      >
        <Label>
          <LabelName>Name</LabelName>
          <InputName
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
          />
        </Label>
        <Label>
          <LabelName>Number</LabelName>
          <PhoneInput
            type="phone"
            country={'ua'}
            value={number}
            onChange={e => setNumber(e)}
          />
        </Label>
        <Button
          marginTop="60px"
          type="submit"
          isLoading={contactOperationLoading}
          loadingText="Working...."
          colorScheme="teal"
          variant="solid"
          leftIcon={<MdOutlineContactPhone />}
        >
          {submitButtonText}
        </Button>
      </Box>
    </>
  );
};

ContactForm.propTypes = {
  modalToggle: PropTypes.func.isRequired,
};
