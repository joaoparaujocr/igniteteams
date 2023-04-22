import { TextListEmpty, ViewLisEmpty } from "./styles";

type Props = {
  message: string;
};

export default function ListEmpty({ message }: Props) {
  return (
    <ViewLisEmpty>
      <TextListEmpty>{message}</TextListEmpty>
    </ViewLisEmpty>
  );
}
