import ReactDOM from 'react-dom';
import App from './App';

// Styles
import { GlobalStyle } from 'styles/Global';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styles/Theme';


ReactDOM.render(
  <ThemeProvider theme={DefaultTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);