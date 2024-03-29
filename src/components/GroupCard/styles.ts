import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { UsersThree } from "phosphor-react-native";

export const TouchableGroupCard = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  width: 100%;
  height: 96px;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;
  padding-left: 24px;
  margin-bottom: 12px;
  gap: 20px;
`;

export const TextTitle = styled.Text`
  ${({ theme: { COLORS, FONT_FAMILY, FONT_SIZE } }) => css`
    font-size: ${FONT_SIZE.MD}px;
    color: ${COLORS.GRAY_200};
    font-family: ${FONT_FAMILY.REGULAR};
  `}
`;

export const IconGroupPeople = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_500,
  size: 32,
  weight: "fill",
}))``;
