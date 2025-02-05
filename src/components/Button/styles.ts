import theme from "@theme/index";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export type ButtonType = 'primary' | 'secondary'

export interface ButtonStyledProps {
  type: ButtonType
}

export const bgColorType: { [key in ButtonType]: string } = {
  primary: theme.COLORS.GREEN_700,
  secondary: theme.COLORS.RED_DARK
}

export const Container = styled(TouchableOpacity) <ButtonStyledProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ type }) => bgColorType[type]};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT_SIZE, FONT_FAMILY } }) => css`
    color: ${COLORS.WHITE};
    font-family: ${FONT_FAMILY.REGULAR};
    font-size: ${FONT_SIZE.MD}px;
  `}
`