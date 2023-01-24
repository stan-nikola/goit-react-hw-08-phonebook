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
  const [submitButtonText, setSubmitButtonText] = useState('Add contact');
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const { contacts, contactOperationLoading } = useContacts();

  useEffect(() => {
    if (contactId) {
      setSubmitButtonText('Update contact');
      const finnedContactById = contacts.find(
        contact => contact.id === contactId
      );
      setName(finnedContactById.name);
      setNumber(finnedContactById.number);
    }
  }, [contactId, contacts]);
  useEffect(() => {
    if (contactOperationLoading) {
      return () => {
        setName('');
        setNumber('');
        modalToggle();
      };
    }
  }, [contactOperationLoading, modalToggle]);

  const handleSubmit = e => {
    e.preventDefault();

    const duplicateContactData = contacts.filter(
      contact => contact.name === name || contact.number === number
    );

    console.log(duplicateContactData);

    console.log(duplicateContactData.name === name);
    console.log(duplicateContactData.number === number);

    if (
      duplicateContactData.name === name &&
      duplicateContactData.number === number
    ) {
      setErrorMessage('name is exist');
      return;
    }

    if (!contactId) {
      dispatch(addContact({ name, number }));
      return;
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
        onChange={() => {
          setErrorMessage(null);
        }}
        onSubmit={handleSubmit}
      >
        <Label>
          <LabelName>Name</LabelName>
          <InputName
            type="text"
            name="name"
            value={name}
            onChange={e => {
              setName(e.currentTarget.value);
            }}
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
        <p>{errorMessage}</p>

        <Button
          marginTop="60px"
          isDisabled={errorMessage}
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

//  const onHandleFocus = e => {
//    console.log(e.currentTarget.name);
//    // console.log(e.target.value.replace(/[{(/ /)}]/g, '').slice(1));
//    // console.log(typeof number);
//    // console.log(typeof e.target.value.replace(/[{(/ /)}]/g, '').slice(1));
//    if (
//      e.target.value === name &&
//      e.target.value.replace(/[{(/ /)}]/g, '').slice(1) === number
//    ) {
//      console.log('error');
//      return;
//    }
//  };
