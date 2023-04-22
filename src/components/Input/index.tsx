import { TextInputProps } from "react-native/types";
import { TextInputStyle } from "./styles";
import { useTheme } from "styled-components/native";

type Props = TextInputProps;

export default function Input({ ...rest }: Props) {
  const {
    COLORS: { GRAY_300 },
  } = useTheme();

  return <TextInputStyle placeholderTextColor={GRAY_300} {...rest} />;
}
