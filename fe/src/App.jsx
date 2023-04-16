import { ThemeProvider } from 'styled-components';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import GlobalStyle from './assets/styles/Global';
import defaultTheme from './assets/styles/themes/default';

import Board from './components/Board';
import Header from './components/Header';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
        <Board />
      </ThemeProvider>
    </DndProvider>
  );
}

export default App;
