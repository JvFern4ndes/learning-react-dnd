import { PropTypes } from 'prop-types';

// import { Container, Content } from './styles';

export default function Header({ title }) {
  return (
    <Header title={title} />
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
