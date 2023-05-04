import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";

import { ContentView, Icon, NewGroupView } from "./styles";

import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { groupCreate } from "@storage/group/groupCreate";

export default function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  const handleGoToPlayers = async () => {
    const id = uuid.v4() as string;
    await groupCreate({ name: group, id });
    navigation.navigate("players", { name: group, id });
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
