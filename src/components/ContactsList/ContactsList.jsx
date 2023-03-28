import { useMemo } from 'react';
import { useContacts } from 'components/hooks/useContacts';

import { ContactListItem } from './ContactsListItem';
import {
  ContactListContainer,
  NoContactTittle,
  contactListAddBtn,
} from './ContactsList.styled';
import { AddContactButton } from './../AddContactButton/AddContactButton';
import { Box, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { contactsFilter } from 'redux/contacts/filterSlice';

export const ContactsList = ({ modalToggle }) => {
  const dispatch = useDispatch();
  const { contacts, contactOperationLoading, filter } = useContacts();

  const visibleContacts = useMemo(
    () =>
      contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
    [contacts, filter]
  );

  return visibleContacts.length < 1 ? (
    contacts.length < 1 ? (
      !contactOperationLoading && (
        <Box display="flex" flexDirection="column" w="100%" alignItems="center">
          <NoContactTittle>
            You don't have contacts yet, to add click the add contact button
          </NoContactTittle>
          <AddContactButton
            modalToggle={modalToggle}
            btnStyles={contactListAddBtn}
          />
        </Box>
      )
    ) : (
      <Box display="flex" flexDirection="column" w="100%" alignItems="center">
        <NoContactTittle>
          No matches with <span> {filter}</span>
        </NoContactTittle>
        <Button
          onClick={() => dispatch(contactsFilter(''))}
          borderRadius="none"
          colorScheme="teal"
          variant="solid"
        >
          Clear
        </Button>
      </Box>
    )
  ) : (
    <ContactListContainer as="ul" display="flex" flexWrap="wrap" gridGap={2}>
      {visibleContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          modalToggle={modalToggle}
          {...contact}
        />
      ))}
    </ContactListContainer>
  );
};
