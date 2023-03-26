import { Progress } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const ContactContainer = styled.div`
  background-color: ${p => p.theme.colors.thirdBg};
  height: 100vh;
  padding-top: ${p => p.theme.space[2]};
  @media screen and (min-width: 768px) {
    padding-top: ${p => p.theme.space[3]};
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    padding-left: ${p => p.theme.space[3]};
    padding-right: ${p => p.theme.space[3]};
  }
`;

export const ContactBar = styled.div`
  margin-bottom: ${p => p.theme.space[2]};

  @media screen and (min-width: 1024px) {
    min-width: 420px;
  }
`;

export const LoadingProgress = styled(Progress)`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
`;

export const contactsAddBtn = { w: '100%', height: 14, fontSize: 24 };
