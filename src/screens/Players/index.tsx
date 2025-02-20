import { Button, ButtonIcon, Filter, Header, Highlight, Input, ListEmpty, Loading, PlayerCard } from "@components/index";
import { Container, CountPlayersList, Form, HeaderList } from "./styles";
import { Alert, FlatList, TextInput } from "react-native";
import { useCallback, useRef, useState } from "react";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { AppError } from "@utils/AppError";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";

interface RouteParams {
  group: string
}

export default function Players() {
  const [isLoading, setIsLoading] = useState(true)
  const [name, setName] = useState('')
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const inputRef = useRef<TextInput | null>(null)
  const navigation = useNavigation()

  const { group } = useRoute().params as RouteParams

  const fetchPlayersByTeam = async () => {
    try {
      setIsLoading(true)
      const playersByGroup = await playersGetByGroupAndTeam(group, team)
      setPlayers(playersByGroup)
    } catch (error) {
      Alert.alert('Players', 'Não foi possivel carregar os players do time selecionado.')
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddPlayer = async () => {
    if (name.trim().length === 0) {
      return Alert.alert('Novo Player', 'O nome precisa estar preenchido.')
    }

    try {
      const player = {
        name,
        team
      }

      await playerAddByGroup(player, group)
      await fetchPlayersByTeam()
      setName('')
      inputRef.current.blur()
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Player', error.message)
      } else {
        Alert.alert('Novo Player', 'Não foi possível adicionar o novo player.')
        console.log(error)
      }
    }
  }

  const handleRemovePlayer = async (playerName: string) => {
    try {
      await playerRemoveByGroup(playerName, group)
      await fetchPlayersByTeam()
    } catch (error) {
      Alert.alert('Excluir player', 'Ocorreu um erro durante a exlusão.')
      console.log(error)
    }
  }

  const groupRemove = async () => {
    try {
      await groupRemoveByName(group)
      navigation.navigate('groups')
    } catch (error) {
      Alert.alert('Remover Grupo', 'Não foi possivel remover o Grupo.')
    }
  }

  const handleRemoveGroup = () => {
    Alert.alert(
      'Remover grupo',
      'Você deseja remover o grupo?',
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: groupRemove
        },
      ])
  }

  useFocusEffect(useCallback(() => {
    fetchPlayersByTeam()
  }, [team]))

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input
          inputRef={inputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setName}
          value={name}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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

        {!isLoading && (
          <CountPlayersList>
            {players.length}
          </CountPlayersList>
        )}
      </HeaderList>

      {isLoading ? <Loading /> : (
        <>
          <FlatList
            data={players}
            keyExtractor={item => item.name}
            renderItem={({ item }) => <PlayerCard name={item.name} onRemove={() => handleRemovePlayer(item.name)} />}
            ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time" />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[{ paddingBottom: 50 }, players.length === 0 && { flex: 1 }]}
          />
        </>
      )}
      <Button
        title="Remover Turma"
        type="secondary"
        onPress={handleRemoveGroup}
      />
    </Container>
  )
}