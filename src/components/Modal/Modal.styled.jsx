import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(3px);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 480px;
  width: 300px;
  padding: ${p => p.theme.space[3]};
  background-color: ${p => p.theme.colors.secondaryBg};
  box-shadow: ${p => p.theme.shadows.items};
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 450px;
  }
`;
