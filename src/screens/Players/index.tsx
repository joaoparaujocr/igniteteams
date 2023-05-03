import { FlatList } from "react-native";
import { ParamListBase, RouteProp, useRoute } from "@react-navigation/native";
import { useState } from "react";

import { PlayersView, Form, NumbersOfPlayes, HeaderList } from "./styles";

import Highlight from "@components/Highlight";
import ButtonIcon from "@components/ButtonIcon";
import Header from "@components/Header";
import Input from "@components/Input";
import Filter from "@components/Filter";
import PlayerCard from "@components/PlayerCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";

interface CustomRouteProp extends RouteProp<ParamListBase> {
  params: {
    group: string;
  };
}

export default function Players() {
  const {
    params: { group },
  } = useRoute<CustomRouteProp>();

  const [selected, setSelected] = useState<number>();
  const players = [
    {
      id: 1,
      name: "João0",
    },
    {
      id: 2,
      name: "Paulo",
    },
    {
      id: 3,
      name: "Paulo",
    },
    {
      id: 4,
      name: "Paulo",
    },
    {
      id: 5,
      name: "Paulo",
    },
    {
      id: 6,
      name: "Paulo",
    },
    {
      id: 7,
      name: "Paulo",
    },
    {
      id: 8,
      name: "Paulo",
    },
    {
      id: 9,
      name: "Paulo",
    },
    {
      id: 10,
      name: "Paulo",
    },
    {
      id: 11,
      name: "Paulo",
    },
    {
      id: 12,
      name: "Paulo",
    },
    {
      id: 13,
      name: "Paulo",
    },
  ];

  return (
    <PlayersView>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />
      <Form>
        <Input placeholder="Adicionar pessoa" autoCorrect={false} />
        <ButtonIcon name="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={[
            {
              id: 1,
              name: "Time A",
            },
            {
              id: 2,
              name: "Time B",
            },
          ]}
          renderItem={({ item: { id, name } }) => (
            <Filter
              isSelected={id === selected}
              onPress={() => setSelected(id)}
              title={name}
              key={id}
            />
          )}
          horizontal
        />
        <NumbersOfPlayes>3</NumbersOfPlayes>
      </HeaderList>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[]}
        renderItem={({ item: { id, name } }) => (
          <PlayerCard key={id} name={name} handleClose={() => {}} />
        )}
        ListEmptyComponent={<ListEmpty message="Não há players nesse time" />}
        contentContainerStyle={[
          {
            paddingBottom: 50,
          },
          [].length === 0 && { flex: 1 },
        ]}
      />
      <Button text="Remover turma" type="secondary" />
    </PlayersView>
  );
}
