import { useContacts } from 'components/hooks/useContacts';
import { ContactsCountTitle } from './ContactsCount.styled';
import { FcBusinessContact } from 'react-icons/fc';
import { Box } from '@chakra-ui/react';

export const ContactsCount = () => {
  const { contacts } = useContacts();

  return (
    <Box bg="secondaryBg" p={2} borderBottom="3px solid white ">
      <ContactsCountTitle>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <FcBusinessContact />
          <span>{contacts.length}</span>
          <p>contacts</p>
        </Box>
      </ContactsCountTitle>
    </Box>
  );
};
