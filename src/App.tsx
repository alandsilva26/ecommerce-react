import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store/store';

// Special Routes
import DefaultRoute from './navigation/DefaultRoute';

// Components
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3d405b',
    },
    secondary: {
      main: '#f2cc8f',
    },
    background: {
      // default: '#fafafa',
      default: '#f1faee',
    },
  },
});

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <DefaultRoute exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
