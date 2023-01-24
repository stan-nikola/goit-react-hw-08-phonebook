import styled from '@emotion/styled';
import { BsFillPencilFill, BsFillXCircleFill } from 'react-icons/bs';

export const ContactList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  min-width: 450px;
  text-align: center;

  padding: ${p => p.theme.space[2]};
  background-color: ${p => p.theme.colors.secondaryBg};
  p {
    font-weight: ${p => p.theme.fontWeights.bold};
    text-transform: capitalize;
    font-size: ${p => p.theme.fontSizes.m};
    min-width: 40%;
  }
  &:nth-of-type(2n + 1) {
    background-color: ${p => p.theme.colors.thirdBg};
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
