import { Progress } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const ContactContainer = styled.div`
  padding-top: ${p => p.theme.space[2]};
  @media screen and (min-width: 768px) {
    padding-top: ${p => p.theme.space[3]};
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const ContactBar = styled.div`
  margin-bottom: ${p => p.theme.space[2]};

  @media screen and (min-width: 1024px) {
    min-width: 400px;
  }
`;

export const LoadingProgress = styled(Progress)`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
`;
