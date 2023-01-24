import { Button } from '@chakra-ui/react';

import { AddContactIcon } from './AddContactButton.styled';
export const AddContactButton = ({ modalToggle }) => {
  return (
    <Button
      display="flex"
      justifyContent="flex-start"
      textAlign="center"
      borderRadius="none"
      mt={1}
      height={14}
      type="button"
      onClick={modalToggle}
      isLoading={false}
      loadingText="Loading"
      colorScheme="teal"
      variant="solid"
      spinnerPlacement="start"
      fontSize={24}
    >
      <AddContactIcon />
      Add Contact
    </Button>
  );
};
