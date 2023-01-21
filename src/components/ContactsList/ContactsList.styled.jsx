import styled from '@emotion/styled';
import { BsFillPencilFill, BsFillXCircleFill } from 'react-icons/bs';

export const ContactList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  min-width: 450px;
  text-align: center;

  padding: ${p => p.theme.space[2]};
  background-color: ${p => p.theme.colors.secondaryBg};
  &:nth-of-type(2n + 1) {
    background-color: ${p => p.theme.colors.thirdBg};
  }
`;
export const ContactItem = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  span {
    margin-left: ${p => p.theme.space[3]};
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
export const EditButton = styled(BsFillPencilFill)`
  fill: #4271f3;
  width: 18px;
  height: 18px;
  transition: fill 250ms linear;
  &:hover,
  &:focus {
    fill: #1b54f2;
  }
`;

export const DeleteButton = styled(BsFillXCircleFill)`
  fill: #ce2727;
  width: 18px;
  height: 18px;
  transition: fill 250ms linear;
  &:hover,
  &:focus {
    fill: #fa0000;
  }
`;

export const ContactBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${p => p.theme.borders.none};
  background-color: transparent;

  padding: ${p => p.theme.space[2]};
  cursor: pointer;
`;

// export const ContactName = styled.span`
//   margin-right: ${p => p.theme.space[2]}px;
//   font-size: ${p => p.theme.fontSizes.m};
//   font-weight: ${p => p.theme.fontWeights.bold};
// `;
