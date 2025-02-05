import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`

export const Title = styled.Text`
  text-align: center;

  ${({ theme: { FONT_FAMILY, FONT_SIZE, COLORS } }) => css`  
  font-size: ${FONT_SIZE.XL}px;
  font-family: ${FONT_FAMILY.BOLD};
  color: ${COLORS.WHITE};
  `}
`

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme: { FONT_FAMILY, FONT_SIZE, COLORS } }) => css`  
    font-size: ${FONT_SIZE.MD}px;
    font-family: ${FONT_FAMILY.REGULAR};
    color: ${COLORS.GRAY_300};
  `}
`