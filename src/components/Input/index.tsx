import { TextInputProps } from "react-native/types";
import { TextInputStyle } from "./styles";

type Props = TextInputProps;

export default function Input({ ...rest }: Props) {
  return <TextInputStyle {...rest} />;
}
