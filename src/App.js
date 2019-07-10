import React from "react";
import createStore from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import { 
  Route,
  Switch,
  Redirect,
  HashRouter
} from 'react-router-dom';

import Wrapper from "./components/Wrapper";
import NowWhat from "./components/NowWhat";
import TopNav from './TopNav'
import MetricChart from './MetricChart';

const store = createStore();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "rgb(39,49,66)"
    },
    secondary: {
      main: "rgb(197,208,222)"
    },
    background: {
      main: "rgb(226,231,238)"
    }
  }
});

const GetStarted =()=>(<Wrapper><NowWhat /><ToastContainer /></Wrapper>);

const App = props => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
    <HashRouter>
        <TopNav />
        <Switch>
          <Route path='/' exact component={(props)=> <GetStarted  {...props} />} />
          <Route path='/metricChart' exact component={(props)=> <MetricChart {...props} /> }  />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </Provider>
  </MuiThemeProvider>
);

export default App;
