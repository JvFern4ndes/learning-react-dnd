import List from '../List';
import { Container } from './styles';

export default function Board() {
  return (
    <Container>
      <List title="Tarefas à serem cumpridas" />
      <List title="Em andamento" />
      <List title="Tarefas cumpridas" />
    </Container>
  );
}
