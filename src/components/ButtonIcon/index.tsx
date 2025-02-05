import { ButtonStyledProps, ButtonType } from "@components/Button/styles";
import { Container, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

interface ButtonIconProps extends Partial<ButtonStyledProps>, TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({ type = 'primary', icon, ...rest }: ButtonIconProps) {

  return (
    <Container {...({ type, ...rest })}>
      <Icon name={icon} type={type} />
    </Container>
  )
}