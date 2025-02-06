import { Header, Highlight, Input, Button } from "@components/index";
import { Container, Content, Icon } from "./styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export default function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  const handleNew = () => {
    if (group.trim().length === 0) {
      return Alert.alert('Erro ao criar uma turma', 'É preciso inserir o nome da turma')
    }

    navigation.navigate('players', { group })
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma e adicione as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}