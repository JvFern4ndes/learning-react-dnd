import { ThemeProvider } from 'styled-components';

import GlobalStyle from './assets/styles/Global';
import defaultTheme from './assets/styles/themes/default';

import List from './components/List';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header title="Drag and Drop" />
      <List />
    </ThemeProvider>
  );
}

export default App;
