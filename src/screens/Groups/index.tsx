import Header from "@components/Header";
import { ContainerView } from "./styles";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";

export default function Groups() {
  const [groups, setGroups] = useState([
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
        data={groups}
        renderItem={({ item }) => (
          <GroupCard title={item.title} key={item.id} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </ContainerView>
  );
}
