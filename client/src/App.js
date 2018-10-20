import React from "react";
import { Router, Route} from "react-router-dom";
import AuthApp from "./AuthApp/AuthApp"
import AuthPage from "./AuthPage/AuthPage"
import Callback from './Callback/Callback';
// import NoMatch from "./pages/NoMatch";
import Auth from './Auth/Auth';
import history from './history';


const auth = new Auth();

const App = () => (
  <Router history={history} component={AuthApp}>
    <div>
        <Route path="/" render={(props) => <AuthApp auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <AuthPage auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => <Callback {...props} />} />
      </div>
  </Router>
);

export default App;
