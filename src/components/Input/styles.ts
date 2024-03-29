import styled from "styled-components";
import { TextInput } from "react-native";
import { css } from "styled-components/native";

export const TextInputStyle = styled(TextInput)`
  max-height: 56px;
  border-radius: 6px;
  padding: 16px;
  flex: 1;

  ${({ theme: { COLORS, FONT_FAMILY, FONT_SIZE } }) => css`
    font-size: ${FONT_SIZE.MD}px;
    font-family: ${FONT_FAMILY.REGULAR};
    color: ${COLORS.WHITE};
    background-color: ${COLORS.GRAY_700};
  `}
`;
