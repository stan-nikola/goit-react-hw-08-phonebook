import { useContacts } from 'components/hooks/useContacts';
import { ContactsCountContainer } from './ContactsCount.styled';
import { FcBusinessContact } from 'react-icons/fc';
import { Box } from '@chakra-ui/react';

export const ContactsCount = () => {
  const { contacts } = useContacts();

  return (
    <ContactsCountContainer>
      <Box display="flex" alignItems="center">
        <FcBusinessContact />
        <span>{contacts.length}</span>contacts
      </Box>
    </ContactsCountContainer>
  );
};
