import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { css } from 'styled-components/native'


export const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 6px;
`

export const Name = styled.Text`
  flex: 1;
  ${({ theme: { COLORS, FONT_FAMILY, FONT_SIZE } }) => css`
     font-size: ${FONT_SIZE.MD}px;
     color: ${COLORS.GRAY_200};
     font-family: ${FONT_FAMILY.REGULAR};
  `}
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200
}))`
  margin: 0 4px 0 16px;
`