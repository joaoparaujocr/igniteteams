import { TouchableOpacityProps } from "react-native";
import { ButtonIconTouchable, Icon } from "./styles";
import { TypesColor } from "@components/Button/styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  name: keyof typeof MaterialIcons.glyphMap;
  type?: TypesColor;
};

export default function ButtonIcon({ name, type = "primary", ...rest }: Props) {
  return (
    <ButtonIconTouchable {...rest}>
      <Icon name={name} type={type} />
    </ButtonIconTouchable>
  );
}
