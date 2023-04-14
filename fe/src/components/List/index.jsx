import PropTypes from 'prop-types';

import React from 'react';
import Container, { Header } from './styles';
import Card from '../Card';

export default function List(props) {
  const { title } = props;

  return (
    <Container>
      <Header>
        {title}
      </Header>
      <Card
        task="Varrer a casa"
        date="14/04/2023"
        time="9:30"
      />
    </Container>
  );
}

List.propTypes = {
  title: PropTypes.string.isRequired,
};
