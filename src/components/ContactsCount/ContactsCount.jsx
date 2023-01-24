import { useContacts } from 'components/hooks/useContacts';
import { ContactsCountTitle } from './ContactsCount.styled';
import { FcBusinessContact } from 'react-icons/fc';
import { Box } from '@chakra-ui/react';

export const ContactsCount = () => {
  const { contacts } = useContacts();

  return (
    <Box bg="secondaryBg" height={14} p={2} mb={1}>
      <ContactsCountTitle>
        <Box display="flex" alignItems="center">
          <FcBusinessContact />

          <p>
            <span>{contacts.length}</span>contacts
          </p>
        </Box>
      </ContactsCountTitle>
    </Box>
  );
};
