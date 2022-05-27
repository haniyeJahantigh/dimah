import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import dashRoute from './Routes/dashboard.Routes';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "../src/theme/index"

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <Switch>
        {dashRoute.map(({ path, exact, Component }, index) => {
            return (
              <Route
                key={index}
                path={path}
                exact={exact}
                render={(props) => <Component {...props} />}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
