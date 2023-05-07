import { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { ContainerView } from "./styles";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import Group from "@interface/Group";
import ListEmpty from "@components/ListEmpty";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";
import Header from "@components/Header";
import Button from "@components/Button";
import { groupsGetAll } from "@storage/group/groupsGetAll";

export default function Groups() {
  const navigation = useNavigation();
  const [groups, setGroups] = useState<Group[]>([]);

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.error(error);
    }
  }

  function goToGroup(group: Group) {
    navigation.navigate("players", group);
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <ContainerView>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        ListEmptyComponent={<ListEmpty message="Não há turmas" />}
        data={groups}
        renderItem={({ item }) => (
          <GroupCard
            onPress={() => goToGroup(item)}
            title={item.name}
            key={item.id}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          groups.length === 0 && {
            flex: 1,
          }
        }
      />
      <Button onPress={handleNewGroup} text="Adicionar nova turma" />
    </ContainerView>
  );
}
