import { TouchableOpacityProps } from "react-native/types";
import { ButtonTouchable, TextButton, TypesColor } from "./styles";

type Props = TouchableOpacityProps & {
  text: string;
  type?: TypesColor;
};

export default function Button({ text, type = "primary", ...rest }: Props) {
  return (
    <ButtonTouchable type={type} {...rest}>
      <TextButton>{text}</TextButton>
    </ButtonTouchable>
  );
}
