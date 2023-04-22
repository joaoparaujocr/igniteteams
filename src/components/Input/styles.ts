import styled from "styled-components";
import { TextInput } from "react-native";
import { css } from "styled-components/native";

export const TextInputStyle = styled(TextInput)`
  flex: 1;
  height: 56px;
  border-radius: 6px;
  padding: 16px;

  ${({ theme: { COLORS, FONT_FAMILY, FONT_SIZE } }) => css`
    font-size: ${FONT_SIZE.MD}px;
    font-family: ${FONT_FAMILY.REGULAR};
    color: ${COLORS.WHITE};
    background-color: ${COLORS.GRAY_700};
  `}
`;
