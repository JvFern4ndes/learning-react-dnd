import PropTypes from 'prop-types';

import Container, { Content, ContentContainer, Label } from './styles';

export default function Card(props) {
  const { task, date, time } = props;

  return (
    <Container>
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
