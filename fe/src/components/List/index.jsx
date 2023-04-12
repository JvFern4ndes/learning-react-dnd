import PropTypes from 'prop-types';

import React from 'react';
import Container, { Header } from './styles';

export default function List(props) {
  const { title } = props;

  return (
    <Container>
      <Header>
        {title}
      </Header>
    </Container>
  );
}

List.propTypes = {
  title: PropTypes.string.isRequired,
};
