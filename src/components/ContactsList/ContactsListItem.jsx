import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { useState } from 'react';
import {
  ContactBtn,
  ContactList,
  DeleteButton,
  EditButton,
} from './ContactsList.styled';
import { Box } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';

export const ContactListItem = ({ modalToggle, id, name, number }) => {
  const [deleteLoading, setDeleteLoading] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    setDeleteLoading(true);
    dispatch(deleteContact(id));
  };
  return (
    <ContactList>
      <p>{name}</p>
      <p>{number}</p>
      <Box display="flex" minWidth="20%" justifyContent="flex-end">
        <ContactBtn type="button" onClick={() => modalToggle(id)}>
          <EditButton />
        </ContactBtn>
        <ContactBtn type="button" onClick={() => handleDeleteContact(id)}>
          {deleteLoading ? (
            <Spinner size="sm" color="red.500" />
          ) : (
            <DeleteButton />
          )}
        </ContactBtn>
      </Box>
    </ContactList>
  );
};
