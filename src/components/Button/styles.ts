import styled from "styled-components/native";
import theme from "@theme/index";
import { TouchableOpacity } from "react-native";

export type TypesColor = "primary" | "secondary";

type TypeColorsButton = Record<TypesColor, string>;

const colorsButton: TypeColorsButton = {
  primary: theme.COLORS.GREEN_500,
  secondary: theme.COLORS.RED,
};

export type ButtonTouchableProps = {
  type: TypesColor;
};

export const ButtonTouchable = styled(TouchableOpacity)<ButtonTouchableProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${({ type }) => colorsButton[type]};
`;

export const TextButton = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
