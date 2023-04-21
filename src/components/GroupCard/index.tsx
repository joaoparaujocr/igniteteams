import { IconGroupPeople, TextTitle, TouchableGroupCard } from "./styles";
import { TouchableOpacityProps } from "react-native/types";

type Props = TouchableOpacityProps & {
  title: string;
};

export default function GroupCard({ title, ...rest }: Props) {
  return (
    <TouchableGroupCard {...rest}>
      <IconGroupPeople />

      <TextTitle>{title}</TextTitle>
    </TouchableGroupCard>
  );
}
