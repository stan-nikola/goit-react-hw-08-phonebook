import { useContacts } from 'components/hooks/useContacts';
import { ContactsCountContainer } from './ContactsCount.styled';
import { FcBusinessContact } from 'react-icons/fc';
import { Box, Spinner } from '@chakra-ui/react';

export const ContactsCount = () => {
  const { contacts, contactOperationLoading } = useContacts();

  return (
    <ContactsCountContainer>
      <Box display="flex" alignItems="center">
        <FcBusinessContact />
        {contactOperationLoading ? (
          <Spinner color="teal" />
        ) : (
          <span>{contacts.length}</span>
        )}
        <p>contacts</p>
      </Box>
    </ContactsCountContainer>
  );
};
