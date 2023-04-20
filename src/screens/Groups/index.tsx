import Header from "@components/Header";
import { ContainerView } from "./styles";
import Highlight from "@components/Highlight";

export default function Groups() {
  return (
    <ContainerView>
      <Header showBackButton />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
    </ContainerView>
  );
}
