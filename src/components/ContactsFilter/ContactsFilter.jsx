import { useDispatch } from 'react-redux';
import { contactsFilter } from 'redux/contacts/filterSlice';
import { Input } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { FilterHeader, FilterIcon } from './ContactsFilter.styled.';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(contactsFilter(e.currentTarget.value));
  };
  return (
    <Accordion bg="secondaryBg" width="400px" defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton
            height={14}
            _expanded={{ bg: '#2470A0', color: 'white' }}
          >
            <Box
              as="span"
              display="flex"
              alignItems="center"
              flex="1"
              textAlign="center"
            >
              <FilterIcon width="24px" height="24px" />
              <FilterHeader>Contacts filter</FilterHeader>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={2}>
          {
            <Input
              ml="20px"
              type="text"
              name="filter"
              onChange={handleChange}
              width="300px"
              variant="filled"
              placeholder="Enter name to find"
              p={2}
            />
          }
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
