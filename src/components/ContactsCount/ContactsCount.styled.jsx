import styled from '@emotion/styled';

export const ContactsCountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  font-size: ${p => p.theme.fontSizes.ml};
  background: ${p => p.theme.colors.secondaryBg};
  margin-bottom: ${p => p.theme.space[1]};


  span {
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-right: ${p => p.theme.space[3]};
  }
  svg {
    margin-right: ${p => p.theme.space[3]};
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 756) {
    justify-content: space-around;
  }
`;
