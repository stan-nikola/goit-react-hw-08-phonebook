import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const UserMenuText = styled.p`
  margin-bottom: ${p => p.theme.space[2]};

  span {
    text-transform: Capitalize;
    margin-left: ${p => p.theme.space[2]};
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;

export const UserMenuButton = styled(Button)`
  border-radius: ${p => p.theme.radii.none};
  background: transparent;
  padding: 0;
  margin-left: ${p => p.theme.space[2]};
  svg {
    width: 30px;
    height: 30px;
    color: ${p => p.theme.colors.linkActive};
    transition: color 250ms linear;
  }

  &:hover,
  &:focus {
    svg {
      color: ${p => p.theme.colors.button};
    }
  }
`;
