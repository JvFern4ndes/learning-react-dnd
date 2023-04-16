import PropTypes from 'prop-types';

import { useDrag } from 'react-dnd';
import {
  Container, Content, ContentContainer, Label,
} from './styles';
import itemTypes from '../../../utils/itemTypes';

export default function Card(props) {
  const { task, date, time } = props;
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: itemTypes.CARD,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <Container ref={drag}>
      <Label />
      <ContentContainer>
        <Content>
          <strong>🟢️ Tarefa:</strong>
          <span>{task}</span>
        </Content>
        <Content>
          <strong>🗓️ Dia:</strong>
          <span>{date}</span>
        </Content>
        <Content>
          <strong>🕐️ Horário:</strong>
          <span>{time}</span>
        </Content>
      </ContentContainer>
    </Container>
  );
}

Card.propTypes = {
  task: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
