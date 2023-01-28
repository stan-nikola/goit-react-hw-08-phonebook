import styled from '@emotion/styled';
import { FiAlertTriangle } from 'react-icons/fi';
import { FormErrorMessage } from '@chakra-ui/react';

export const RegistrationTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[3]};
  m
`;

export const ErrorMessage = styled(FormErrorMessage)`
  position: absolute;
  top: 30px;
  left: 265px;

  z-index: 10;
  width: 300px;
  font-style: italic;
  font-size: ${p => p.theme.fontSizes.s};
  text-align: center;
  border: ${p => p.theme.borders.light};
  border-color: ${p => p.theme.colors.errorBg};
  padding: ${p => p.theme.space[1]};
  background-color: ${p => p.theme.colors.error};
  border-radius: ${p => p.theme.radii.normal};
`;

export const ErrorIcon = styled(FiAlertTriangle)`
  position: absolute;
  top: -11px;
  left: -11px;

  width: 20px;
  height: 20px;
  fill: yellow;
  border: none;
  color: ${p => p.theme.colors.secondaryBorder};
`;
