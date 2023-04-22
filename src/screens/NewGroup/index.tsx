import Header from "@components/Header";
import { ContentView, Icon, NewGroupView } from "./styles";
import Highlight from "@components/Highlight";
import Button from "@components/Button";

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
        <Button text="Criar" />
      </ContentView>
    </NewGroupView>
  );
}
