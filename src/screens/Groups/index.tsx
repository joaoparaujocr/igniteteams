
import { Container } from './styles';
import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty, Header, GroupCard, Highlight, Button } from '@components/index';
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';

export default function Groups() {
  const theme = useTheme()
  const [groups, setGroups] = useState([])

  const navigation = useNavigation()

  const fetchGroups = useCallback(async () => {
    try {
      const allGroups = await groupsGetAll()
      setGroups(allGroups)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useFocusEffect(() => {
    fetchGroups()
  })

  const handleNewGroup = () => {
    navigation.navigate('new')
  }

  const handleOpenGroup = (group: string) => {
    navigation.navigate('players', { group })
  }

  return (
    <Container>
      <Header />

      <Highlight
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => handleOpenGroup(item)}
          />
        )}
        ListEmptyComponent={<ListEmpty message='Não há grupos' />}
        contentContainerStyle={groups.length === 0 && { flex: 1, backgroundColor: theme.COLORS.GRAY_600 }}
      />

      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  );
}
