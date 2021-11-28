import ReactDOM from 'react-dom';
import App from './App';
import { GlobalProvider } from 'providers/Global';

// Styles
import { GlobalStyle } from 'styles/Global';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styles/Theme';


ReactDOM.render(
  <GlobalProvider>
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </GlobalProvider>,
  document.getElementById('root')
);