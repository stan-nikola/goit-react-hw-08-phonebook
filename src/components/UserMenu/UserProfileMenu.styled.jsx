import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const UserMenuText = styled.p`
  span {
    text-transform: Capitalize;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.s};
    @media screen and (min-width: 768px) {
      margin-right: ${p => p.theme.space[3]};
      font-size: ${p => p.theme.fontSizes.m};
    }
    @media screen and (min-width: 1024px) {
      font-size: ${p => p.theme.fontSizes.ml};
    }
  }
`;

export const UserMenuButton = styled(Button)`
  border-radius: ${p => p.theme.radii.none};
  background: transparent;
  padding: 0;
  svg {
    width: 30px;
    height: 30px;
    color: ${p => p.theme.colors.linkActive};
    transition: color 250ms linear;
  }

  &:hover,
  &:focus {
    background: transparent;
    svg {
      color: ${p => p.theme.colors.button};
    }
  }
`;
