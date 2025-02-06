import { Button, ButtonIcon, Filter, Header, Highlight, Input, ListEmpty, PlayerCard } from "@components/index";
import { Container, CountPlayersList, Form, HeaderList } from "./styles";
import { FlatList } from "react-native";
import { useState } from "react";

export default function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState([])

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={team === item}
              onPress={() => setTeam(item)}
            />)}
          horizontal
        />

        <CountPlayersList>
          0
        </CountPlayersList>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => <PlayerCard name={item} onRemove={() => console.log('remover')} />}
        ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time" />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 50 }, players.length === 0 && { flex: 1 }]}
      />
      <Button
        title="Remover Turma"
        type="secondary"
      />
    </Container>
  )
}