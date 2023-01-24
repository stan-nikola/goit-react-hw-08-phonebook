import styled from '@emotion/styled';

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
  margin-bottom: ${p => p.theme.space[2]}px;
`;

function nameInputBorderColorChange({ value }) {
  if (value.length <= 2 || value.length >= 20) {
    return '#d79f9f';
  }
  return '#CACACA';
}
function nameInputBgColorChange({ value }) {
  if (value.length <= 2 || value.length >= 20) {
    return '#FAF0F0';
  }
}

export const InputName = styled.input`
  height: 35px;
  width: 300px;
  border-radius: 5px;
  padding: 2px 10px;
  outline: none;

  border: 1px solid;
  border-color: ${nameInputBorderColorChange};
  background-color: ${nameInputBgColorChange};
`;