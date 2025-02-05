import { TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native"

export interface FilterStylesProps {
  isActive: boolean
}

export const Container = styled(TouchableOpacity) <FilterStylesProps>`
  ${({ theme, isActive }) => isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_700};
  `};

  border-radius: 4px;
  margin-right: 12px;
  height: 38px;
  width: 70px;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT_FAMILY, FONT_SIZE } }) => css`
    font-family: ${FONT_FAMILY.BOLD};
    font-size: ${FONT_SIZE.SM}px;
    color: ${COLORS.WHITE};
  `};

  text-transform: uppercase;
`