import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  return {
    contacts,
    filter,
  };
};
