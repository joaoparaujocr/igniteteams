import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { TypesColor, colorsButton } from "@components/Button/styles";
import { MaterialIcons } from "@expo/vector-icons";

type IconProps = {
  type: TypesColor;
};

export const ButtonIconTouchable = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialIcons).attrs<IconProps>(({ type }) => ({
  color: colorsButton[type],
  size: 24,
}))``;
