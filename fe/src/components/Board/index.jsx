import List from '../List';
import { Container } from './styles';

import api from '../../mocks/api.json';

export default function Board() {
  return (
    <Container>
      {api.lists.map((list) => (
        <List title={list.title} tasks={list.tasks} />
      ))}
    </Container>
  );
}
