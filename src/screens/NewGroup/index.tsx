import { Header, Highlight, Input, Button } from "@components/index";
import { Container, Content, Icon } from "./styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";

export default function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  const handleNew = async () => {
    if (group.trim().length === 0) {
      return Alert.alert('Erro ao criar uma turma', 'É preciso inserir o nome da turma')
    }

    try {
      await groupCreate(group)
      navigation.navigate('players', { group })

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message)
      }

      console.log(error)
    }
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