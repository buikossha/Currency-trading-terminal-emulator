import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Archive from "./components/Archive/Archive";
import Header from "./components/Header/Header";
import Trading from "./components/Trading/Trading";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/trading">
            <Trading />
          </Route>
          <Route path="/archive">
            <Archive />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
