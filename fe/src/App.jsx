import { ThemeProvider } from 'styled-components';

import GlobalStyle from './assets/styles/Global';
import defaultTheme from './assets/styles/themes/default';

import Board from './components/Board';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Board />
    </ThemeProvider>
  );
}

export default App;
