import { TextInput, TextInputProps } from "react-native/types";
import { TextInputStyle } from "./styles";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export default function Input({ inputRef, ...rest }: Props) {
  const {
    COLORS: { GRAY_300 },
  } = useTheme();

  return (
    <TextInputStyle ref={inputRef} placeholderTextColor={GRAY_300} {...rest} />
  );
}
