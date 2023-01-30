import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AuthLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: ${p => p.theme.space[1]};
  color: ${p => p.theme.colors.linkActive};
  background-color: ${p => p.theme.colors.button};
  padding: ${p => p.theme.space[1]} ${p => p.theme.space[3]};

  transition: background-color 250ms linear;
  span {
  }
  svg {
    width: 30px;
    height: 30px;
  }
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.buttonActive};
  }
`;
