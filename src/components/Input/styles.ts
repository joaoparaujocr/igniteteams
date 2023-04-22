import styled from "styled-components";
import { TextInput } from "react-native";

export const TextInputStyle = styled(TextInput)`
  height: 56px;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  padding: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
