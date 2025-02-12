import { TextInputProps, TextInput } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";
import { RefObject } from "react";

interface InputProps extends TextInputProps {
  inputRef: RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: InputProps) {
  const { COLORS } = useTheme()

  return (
    <Container ref={inputRef} {...rest} placeholderTextColor={COLORS.GRAY_300} />
  )
}