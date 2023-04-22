import ListEmpty from "@components/ListEmpty";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";
import Header from "@components/Header";
import Button from "@components/Button";
import Group from "src/interfaces/Group/intex";
import { useState } from "react";
import { FlatList } from "react-native";
import { ContainerView } from "./styles";

export default function Groups() {
  const [groups, setGroups] = useState<Group[]>([
    {
      id: 1,
      title: "Turma 1",
    },
    {
      id: 2,
      title: "Turma 2",
    },
    {
      id: 3,
      title: "Turma 3",
    },
    {
      id: 4,
      title: "Turma 4",
    },
    {
      id: 5,
      title: "Turma 5",
    },
    {
      id: 6,
      title: "Turma 6",
    },
    {
      id: 7,
      title: "Turma 7",
    },
  ]);

  return (
    <ContainerView>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        ListEmptyComponent={<ListEmpty message="Não há turmas" />}
        data={groups}
        renderItem={({ item }) => (
          <GroupCard title={item.title} key={item.id} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          groups.length === 0 && {
            flex: 1,
          }
        }
      />
      <Button text="Adicionar nova turma" />
    </ContainerView>
  );
}
