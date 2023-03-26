import { Button } from '@chakra-ui/react';

import { AddContactIcon } from './AddContactButton.styled';
export const AddContactButton = ({ modalToggle, btnStyles }) => {
  return (
    <Button
      display="flex"
      justifyContent="center"
      textAlign="center"
      borderRadius="none"
      {...btnStyles}
      type="button"
      onClick={modalToggle}
      colorScheme="teal"
      variant="solid"
    >
      <AddContactIcon />
      Add Contact
    </Button>
  );
};
