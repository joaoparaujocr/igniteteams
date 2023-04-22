import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { ContentView, Icon, NewGroupView } from "./styles";

export default function NewGroup() {

  return (
    <NewGroupView>
      <Header showBackButton />
      <ContentView>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />
        <Input
          placeholder="Nome da turma"
          style={{ marginBottom: 20 }}
        />
        <Button text="Criar" />
      </ContentView>
    </NewGroupView>
  );
}
