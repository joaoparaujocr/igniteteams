import Header from "@components/Header";
import { ContentView, Icon, NewGroupView } from "./styles";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { useTheme } from "styled-components/native";

export default function NewGroup() {
  const {
    COLORS: { GRAY_300 },
  } = useTheme();

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
          placeholderTextColor={GRAY_300}
          placeholder="Nome da turma"
          style={{ marginBottom: 20 }}
        />
        <Button text="Criar" />
      </ContentView>
    </NewGroupView>
  );
}
