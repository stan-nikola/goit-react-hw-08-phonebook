import styled from '@emotion/styled';
export const ContactAddEditForm = styled.form``;

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

export const InputName = styled.input`
  height: 35px;
  width: 300px;
  border-radius: ${p => p.theme.radii.normal};
  outline: 1px solid #c8c8c8;
  padding: ${p => p.theme.space[2]};
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
