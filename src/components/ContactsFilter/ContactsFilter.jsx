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
    dispatch(contactsFilter(e.currentTarget.value.toLowerCase()));
  };
  return (
    <Accordion
      bg="secondaryBg"
      min-width="320px"
      mb={1}
      defaultIndex={[1]}
      allowMultiple
    >
      <AccordionItem>
        <h2>
          <AccordionButton
            justifyContent="center"
            height={14}
            _expanded={{ bg: '#2470A0', color: 'white' }}
          >
            <Box
              as="span"
              display="flex"
              alignItems="center"
              textAlign="center"
            >
              <FilterIcon width="24px" height="24px" />
              <FilterHeader>Search </FilterHeader>
            </Box>
            <AccordionIcon width="35px" height="35px" />
          </AccordionButton>
        </h2>
        <AccordionPanel display="flex" justifyContent="center" pb={2}>
          {
            <Input
              type="text"
              name="filter"
              onChange={handleChange}
              width="350px"
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
