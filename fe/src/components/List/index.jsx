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
      <Card />
    </Container>
  );
}

List.propTypes = {
  title: PropTypes.string.isRequired,
};
