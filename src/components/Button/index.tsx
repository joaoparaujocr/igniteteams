import { TouchableOpacityProps } from "react-native";
import { ButtonStyledProps, Container, Title } from "./styles";

interface ButtonProps extends Partial<ButtonStyledProps>, TouchableOpacityProps {
  title: string
}

export function Button({ type = 'primary', title, ...rest }: ButtonProps) {
  return (
    <Container  {...({ ...rest, type })}>
      <Title>
        {title}
      </Title>
    </Container>
  )
}