import { useDispatch } from 'react-redux';
import { contactsFilter } from 'redux/contacts/filterSlice';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(contactsFilter(e.currentTarget.value));
  };
  return (
    <>
      <h3>Contacts filter</h3>
      <input type="text" name="filter" onChange={handleChange} />
    </>
  );
};
