
import { Container } from './styles';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty, Header, GroupCard, Highlight, Button } from '@components/index';
import { useNavigation } from '@react-navigation/native'

export default function Groups() {
  const [groups, setGroups] = useState([])

  const navigation = useNavigation()

  const handleNewGroup = () => {
    navigation.navigate('new')
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
            onPress={() => console.log(item)}
          />
        )}
        ListEmptyComponent={<ListEmpty message='Não há grupos' />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />

      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  );
}
