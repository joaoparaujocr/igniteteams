import { bgColorType, ButtonStyledProps } from "@components/Button/styles";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs<ButtonStyledProps>(({ type }) => ({
  size: 24,
  color: bgColorType[type]
}))``
