import styled from '@emotion/styled';

export const UserMenuText = styled.p`
  margin-bottom: ${p => p.theme.space[2]};

  span {
    text-transform: Capitalize;
    margin-left: ${p => p.theme.space[2]};
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;
