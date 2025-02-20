import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context"

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.GRAY_600};
  padding: 26px;
`

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
`