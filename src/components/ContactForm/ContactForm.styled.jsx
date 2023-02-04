import styled from '@emotion/styled';
import { FiAlertTriangle } from 'react-icons/fi';
import PhoneInput from 'react-phone-input-2';

export const CloseModalBtn = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 10px;
  width: 36px;
  height: 36px;

  transition: color 250ms linear, box-shadow 250ms linear;
  svg {
    fill: currentColor;
    width: 26px;
    height: 26px;
  }
  &:hover,
  &:focus {
    color: #f70606;
  }
`;

export const ModalTitle = styled.h3`
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  margin: ${p => p.theme.space[4]} 0;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]};
  }
`;

export const LabelName = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[2]};
`;

function nameInputBorderColorChange({ value }) {
  if (value.length <= 2 || value.length >= 20) {
    return p => p.theme.colors.errorBg;
  }
  return '#CACACA';
}
function nameInputBgColorChange({ value }) {
  if (value.length <= 2 || value.length >= 20) {
    return p => p.theme.colors.error;
  }
}

export const InputName = styled.input`
  height: 35px;
  width: 260px;

  padding: 2px 10px;
  outline: none;
  transition: border-color 250ms linear, background-color 250ms linear;
  border: 1px solid;
  border-radius: ${p => p.theme.radii.none};

  border-color: ${nameInputBorderColorChange};
  background-color: ${nameInputBgColorChange};
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const PhoneInputStyled = styled(PhoneInput)`
  .form-control {
    border-radius: ${p => p.theme.radii.none} !important;
    width: 260px !important;
    @media screen and (min-width: 768px) {
      width: 300px !important;
    }
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: 130px;
  right: 50%;
  transform: translateX(50%);
  z-index: 10;
  width: 250px;
  font-style: italic;
  font-size: ${p => p.theme.fontSizes.s};
  text-align: center;
  border: ${p => p.theme.borders.light};
  border-color: ${p => p.theme.colors.errorBg};
  padding: ${p => p.theme.space[1]};
  background-color: ${p => p.theme.colors.error};
  border-radius: ${p => p.theme.radii.normal};
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const ErrorIcon = styled(FiAlertTriangle)`
  position: absolute;
  top: -11px;
  left: -11px;

  width: 20px;
  height: 20px;
  fill: yellow;
  border: none;
  color: ${p => p.theme.colors.secondaryBorder};
`;
