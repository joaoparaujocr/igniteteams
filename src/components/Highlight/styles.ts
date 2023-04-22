import styled, { css } from "styled-components/native";

export const ViewHighlight = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const TitleText = styled.Text`
  text-align: center;

  ${({ theme: { COLORS, FONT_FAMILY, FONT_SIZE } }) => css`
    font-size: ${FONT_SIZE.XL}px;
    font-family: ${FONT_FAMILY.BOLD};
    color: ${COLORS.WHITE};
  `}
`;

export const SubtitleText = styled.Text`
  text-align: center;

  ${({ theme: { COLORS, FONT_FAMILY, FONT_SIZE } }) => css`
    font-size: ${FONT_SIZE.MD}px;
    font-family: ${FONT_FAMILY.REGULAR};
    color: ${COLORS.GRAY_300};
  `}
`;
