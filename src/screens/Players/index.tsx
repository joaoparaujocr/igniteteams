import Highlight from "@components/Highlight";
import { PlayersView } from "./styles";
import Header from "@components/Header";

export default function Players() {
  return (
    <PlayersView>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
    </PlayersView>
  );
}
