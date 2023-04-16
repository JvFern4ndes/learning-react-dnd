import PropTypes from 'prop-types';

import React from 'react';
import { Container, Header } from './styles';
import Card from '../Card';

export default function List(props) {
  const { title, tasks } = props;

  return (
    <Container>
      <Header>
        {title}
      </Header>
      {tasks.map((task) => (
        <Card
          task={task.task}
          date={task.date}
          time={task.time}
        />
      ))}
    </Container>
  );
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    task: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  })).isRequired,
};
