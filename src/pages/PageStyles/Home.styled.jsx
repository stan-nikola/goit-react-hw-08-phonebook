import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomeTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[4]};
`;
export const HomeSubTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]};
`;

export const HomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 248px;
  height: 40px;
  background-color: ${p => p.theme.colors.button};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  transition: background-color 250ms linear;
  color: ${p => p.theme.colors.lightColor};
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.buttonActive};
  }

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]};
  }
`;
