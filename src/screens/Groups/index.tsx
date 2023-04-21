import Header from "@components/Header";
import { ContainerView } from "./styles";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";

export default function Groups() {
  return (
    <ContainerView>
      <Header showBackButton />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <GroupCard title="Nome da turma" />
      <GroupCard title="Nome da turma" />
      <GroupCard title="Nome da turma" />
    </ContainerView>
  );
}
