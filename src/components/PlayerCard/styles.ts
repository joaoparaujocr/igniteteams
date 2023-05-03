import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const PlayerCardView = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 6px;
`;

export const PlayerNameText = styled.Text`
  flex: 1;

  ${({ theme: { COLORS, FONT_FAMILY, FONT_SIZE } }) => css`
    font-size: ${FONT_SIZE.MD}px;
    color: ${COLORS.GRAY_200};
    font-family: ${FONT_FAMILY.REGULAR};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: 24,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
