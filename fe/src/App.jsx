import { ThemeProvider } from 'styled-components';

import GlobalStyle from './assets/styles/Global';
import defaultTheme from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>React-dnd</h1>
    </ThemeProvider>
  );
}

export default App;
