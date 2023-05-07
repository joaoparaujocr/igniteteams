import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import { ContentView, Icon, NewGroupView } from "./styles";

import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";

export default function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  const handleGoToPlayers = async () => {
    try {
      const newGroup = await groupCreate(group);
      navigation.navigate("players", newGroup);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message);
      } else {
        Alert.alert("Novo grupo", "Ocorreu um erro ao criar o grupo");
        console.error(error);
      }
    }
  };

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
          onChangeText={setGroup}
          placeholder="Nome da turma"
          style={{ marginBottom: 20 }}
        />
        <Button onPress={handleGoToPlayers} text="Criar" />
      </ContentView>
    </NewGroupView>
  );
}
