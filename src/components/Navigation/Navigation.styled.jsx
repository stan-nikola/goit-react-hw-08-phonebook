import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  transition: color 250ms linear, text-shadow 250ms linear;
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]};
  }
  &.active {
    color: ${p => p.theme.colors.linkActive};
  }
  &:hover,
  &:focus {
    text-shadow: ${p => p.theme.textShadows.nav};
  }
  @media screen and (min-width: 767px) {
    font-size: ${p => p.theme.fontSizes.ml};
  }
`;
