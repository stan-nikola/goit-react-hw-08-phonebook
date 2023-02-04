import styled from '@emotion/styled';

import { FormErrorMessage } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const RegistrationTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[3]};
`;

export const ErrorMessage = styled(FormErrorMessage)`
  position: relative;
  width: 220px;
  font-style: italic;
  font-size: ${p => p.theme.fontSizes.s};
  text-align: center;
  border: ${p => p.theme.borders.light};
  border-color: ${p => p.theme.colors.errorBg};
  padding: ${p => p.theme.space[1]};
  background-color: ${p => p.theme.colors.error};
  border-radius: ${p => p.theme.radii.normal};
  margin-top: ${p => p.theme.space[3]};
  margin-left: 25px;
  color: inherit;

  svg {
    position: absolute;
    top: -11px;
    left: -11px;

    width: 20px;
    height: 20px;
    fill: yellow;
    border: none;
    color: ${p => p.theme.colors.warningIcon};
  }
`;

export const RegisterLogInLink = styled(Link)`
  margin-left: ${p => p.theme.space[2]};
  color: #0f05b6;
`;
export const RememberMeText = styled.span`
  margin-left: ${p => p.theme.space[2]};
`;
