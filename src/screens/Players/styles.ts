import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const PlayersView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  justify-content: center;
  flex-direction: row;
  border-radius: 6px;
`;

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`;

export const NumbersOfPlayes = styled.Text`
  ${({ theme: { COLORS, FONT_FAMILY, FONT_SIZE } }) => css`
    color: ${COLORS.GRAY_200};
    font-family: ${FONT_FAMILY.BOLD};
    font-size: ${FONT_SIZE.SM}px;
  `}
`;
