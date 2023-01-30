import styled from '@emotion/styled';
import { FcSearch } from 'react-icons/fc';

export const FilterHeader = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  margin-right: ${p => p.theme.space[3]};
`;

export const FilterIcon = styled(FcSearch)`
  min-width: 40px;
  height: 40px;
  margin-right: 45px;
`;
