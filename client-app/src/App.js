import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FindJob, Upskill } from "./Routes";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <FindJob />
        </Route>
        <Route path="/upskill">
          <Upskill />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
