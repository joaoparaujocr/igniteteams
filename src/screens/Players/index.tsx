import Highlight from "@components/Highlight";
import ButtonIcon from "@components/ButtonIcon";
import Header from "@components/Header";
import Input from "@components/Input";
import { PlayersView, Form } from "./styles";

export default function Players() {
  return (
    <PlayersView>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Adicionar pessoa" autoCorrect={false} />
        <ButtonIcon name="add" />
      </Form>
    </PlayersView>
  );
}
