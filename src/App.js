import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SiginPage from "./pages/SigninPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SiginPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
