import { TouchableOpacityProps } from "react-native";
import { FilterTouchable, TextTitle, FilterStyleProps } from "./styles";

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export default function Filter({ title, isSelected = false, ...rest }: Props) {
  return (
    <FilterTouchable isSelected={isSelected} {...rest}>
      <TextTitle>{title}</TextTitle>
    </FilterTouchable>
  );
}
