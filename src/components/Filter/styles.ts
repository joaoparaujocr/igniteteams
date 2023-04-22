import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isSelected?: boolean;
};

export const FilterTouchable = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}

  border-radius: 4px;
  margin-right: 12px;
  height: 28px;
  width: 70px;
  align-items: center;
  justify-content: center;
`;

export const TextTitle = styled.Text`
  ${({ theme: { FONT_FAMILY, FONT_SIZE, COLORS } }) => css`
    font-size: ${FONT_SIZE.SM}px;
    font-family: ${FONT_FAMILY.BOLD};
    color: ${COLORS.WHITE};
  `}
  text-transform: uppercase;
`;
