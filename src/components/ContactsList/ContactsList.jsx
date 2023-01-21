import { useMemo } from 'react';
import { useContacts } from 'components/hooks/useContacts';
import { Box } from '@chakra-ui/react';
import { ContactListItem } from './ContactsListItem';

export const ContactsList = ({ modalToggle }) => {
  const { contacts, filter } = useContacts();
  console.log(filter);

  console.log('contacts', contacts);

  const visibleContacts = useMemo(
    () =>
      contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
    [contacts, filter]
  );

  return (
    <Box ml={5}>
      <Box as="ul" display="flex" flexWrap="wrap" gridGap={2}>
        {visibleContacts.map(contact => (
          <ContactListItem
            key={contact.id}
            modalToggle={modalToggle}
            {...contact}
          />
        ))}
      </Box>
    </Box>
  );
};
