import { Header, Highlight, Input, Button } from "@components/index";
import { Container, Content, Icon } from "./styles";

export default function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma e adicione as pessoas"
        />

        <Input placeholder="Nome da turma" />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
        />
      </Content>
    </Container>
  )
}