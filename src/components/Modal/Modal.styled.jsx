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

  min-height: 450px;
  min-width: 400px;
  padding: ${p => p.theme.space[3]};
  background-color: #ffe4c4;
  box-shadow: ${p => p.theme.shadows.items};
`;
