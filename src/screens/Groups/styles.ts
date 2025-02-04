import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.GRAY_600};
  padding: 26px;
`

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
`