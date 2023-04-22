import styled, { css } from "styled-components/native";

export const ViewLisEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextListEmpty = styled.Text`
  text-align: center;

  ${({ theme: { COLORS, FONT_FAMILY, FONT_SIZE } }) => css`
    font-size: ${FONT_SIZE.SM}px;
    font-family: ${FONT_FAMILY.REGULAR};
    color: ${COLORS.GRAY_300};
  `}
`;
