import { FlatList } from "react-native";
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
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
import Group from "src/interfaces/Group";
import { groupDelete } from "@storage/group/groupDelete";

interface CustomRouteProp extends RouteProp<ParamListBase> {
  params: Group;
}

export default function Players() {
  const navigation = useNavigation();
  const {
    params: { name, id },
  } = useRoute<CustomRouteProp>();

  const [selected, setSelected] = useState<number>();
  const handleDeleteGroup = async (id: string) => {
    await groupDelete(id);
    navigation.navigate("groups");
  };

  return (
    <PlayersView>
      <Header showBackButton />
      <Highlight title={name} subtitle="adicione a galera e separe os times" />
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
      <Button
        onPress={() => handleDeleteGroup(id)}
        text="Remover grupo"
        type="secondary"
      />
    </PlayersView>
  );
}
