import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import {Provider} from 'react-redux'
import store from './store'
const theme = createMuiTheme({
  palette:{
   primary:{
     main: '#212121',
     light: '#424242',
     dark: '#212121'
   },
   secondary: {
     main: '#fafafa',
     light: '#fafafa',
     dark: '#fafafa'
   }
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
    <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
