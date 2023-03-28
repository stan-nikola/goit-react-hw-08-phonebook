import styled from '@emotion/styled';
import { BsFillPencilFill, BsFillXCircleFill } from 'react-icons/bs';

export const ContactListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[2]};
  height: 60px;
  @media screen and (min-width: 1024px) {
    margin-left: ${p => p.theme.space[3]};
    margin-top: ${p => p.theme.space[0]};
  }
`;
export const ContactList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  min-width: 100%;
  text-align: center;
  padding: ${p => p.theme.space[2]};
  background-color: ${p => p.theme.colors.secondaryBg};

  p {
    font-weight: ${p => p.theme.fontWeights.bold};
    text-transform: capitalize;
    font-size: ${p => p.theme.fontSizes.s};
    min-width: 40%;
  }

  @media screen and (max-width: 767px) {
    &:nth-of-type(2n + 1) {
      background-color: ${p => p.theme.colors.contactBg};
    }
  }

  @media screen and (min-width: 768px) {
    min-width: 375px;
  }

  @media screen and (min-width: 1024px) {
    min-width: 450px;
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
export const NoContactTittle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: baseline;
  text-align: center;
  width: 100%;
  border: ${p => p.theme.borders.none};
  margin-top: ${p => p.theme.space[3]};
  margin-bottom: ${p => p.theme.space[3]};
  padding: ${p => p.theme.space[2]};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};

  span {
    color: ${p => p.theme.colors.buttonActive};
    padding: 0 ${p => p.theme.space[2]};
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const contactListAddBtn = { w: '220px', height: 10, fontSize: 16 };
