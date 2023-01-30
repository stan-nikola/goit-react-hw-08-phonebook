import { useMemo } from 'react';
import { useContacts } from 'components/hooks/useContacts';
import { Box } from '@chakra-ui/react';
import { ContactListItem } from './ContactsListItem';
import { ContactListContainer } from './ContactsList.styled';

export const ContactsList = ({ modalToggle }) => {
  const { contacts, filter } = useContacts();

  const visibleContacts = useMemo(
    () =>
      contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
    [contacts, filter]
  );

  return (
    <ContactListContainer>
      <Box as="ul" display="flex" flexWrap="wrap" gridGap={2}>
        {visibleContacts.map(contact => (
          <ContactListItem
            key={contact.id}
            modalToggle={modalToggle}
            {...contact}
          />
        ))}
      </Box>
    </ContactListContainer>
  );
};
