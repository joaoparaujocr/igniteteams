import ButtonIcon from "@components/ButtonIcon";
import { PlayerCardView, Icon, PlayerNameText } from "./styles";

type Props = {
  name: string;
  handleClose: () => void;
};

export default function PlayerCard({ name, handleClose }: Props) {
  return (
    <PlayerCardView>
      <Icon name="person" />
      <PlayerNameText>{name}</PlayerNameText>
      <ButtonIcon onPress={handleClose} name="close" type="secondary" />
    </PlayerCardView>
  );
}
