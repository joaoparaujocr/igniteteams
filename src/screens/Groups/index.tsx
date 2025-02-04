import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export default function Groups() {
  const [groups, setGroups] = useState([])

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
      />
    </Container>
  );
}
