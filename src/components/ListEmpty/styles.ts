import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Message = styled.Text`
  text-align: center;

  ${({ theme: { FONT_FAMILY, FONT_SIZE, COLORS } }) => css`

    font-size: ${FONT_SIZE.SM}px;
    font-family: ${FONT_FAMILY.REGULAR};
    color: ${COLORS.GRAY_300};
  `}
`