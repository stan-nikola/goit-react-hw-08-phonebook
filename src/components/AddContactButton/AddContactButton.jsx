import { Button } from '@chakra-ui/react';

import { AddContactIcon } from './AddContactButton.styled';
export const AddContactButton = ({ modalToggle }) => {
  return (
    <Button
      display="flex"
      justifyContent="center"
      textAlign="center"
      borderRadius="none"
      w="100%"
      height={14}
      type="button"
      onClick={modalToggle}
      colorScheme="teal"
      variant="solid"
      fontSize={24}
    >
      <AddContactIcon />
      Add Contact
    </Button>
  );
};
