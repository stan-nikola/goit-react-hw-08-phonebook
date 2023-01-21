import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]};
  }
  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;
