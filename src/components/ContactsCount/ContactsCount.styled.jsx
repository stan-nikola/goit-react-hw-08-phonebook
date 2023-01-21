import styled from '@emotion/styled';

export const ContactsCountTitle = styled.h3`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.ml};

  span {
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-right: ${p => p.theme.space[3]};
  }
  svg {
    margin-right: 80px;
    width: 40px;
    height: 40px;
  }
`;
