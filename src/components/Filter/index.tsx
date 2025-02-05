import { TouchableOpacityProps } from "react-native";
import { Container, FilterStylesProps, Title } from "./styles";

interface FilterProps extends Partial<FilterStylesProps>, TouchableOpacityProps {
  title: string
}

export function Filter({ isActive = false, title, ...rest }: FilterProps) {
  return (
    <Container {...({ isActive, ...rest })}>
      <Title>{title}</Title>
    </Container>
  )
}