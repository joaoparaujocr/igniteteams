import Highlight from "@components/Highlight";
import ButtonIcon from "@components/ButtonIcon";
import Header from "@components/Header";
import Input from "@components/Input";
import Filter from "@components/Filter";
import { FlatList } from "react-native";
import { PlayersView, Form, NumbersOfPlayes } from "./styles";
import { useState } from "react";
import { ViewHeader } from "@components/Header/styles";

export default function Players() {
  const [selected, setSelected] = useState<number>();

  return (
    <PlayersView>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Adicionar pessoa" autoCorrect={false} />
        <ButtonIcon name="add" />
      </Form>
      <ViewHeader>
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
      </ViewHeader>
    </PlayersView>
  );
}
