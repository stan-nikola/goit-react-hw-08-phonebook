import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AuthLink = styled(Link)`
  svg {
    width: 30px;
    height: 30px;
    color: ${p => p.theme.colors.linkActive};
    transition: color 250ms linear;
    &:hover,
    &:focus {
      color: ${p => p.theme.colors.button};
    }
  }
`;
