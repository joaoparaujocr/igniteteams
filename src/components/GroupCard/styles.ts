import theme from "@theme/index";
import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  ${({ theme: { FONT_FAMILY, FONT_SIZE, COLORS } }) => css`  
    font-size: ${FONT_SIZE.MD}px;
    color: ${COLORS.GRAY_200};
    font-family: ${FONT_FAMILY.REGULAR};
  `}

`

export const Icon = styled(UsersThree).attrs(({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: 'fill'
}))`
  margin-right: 20px;
`