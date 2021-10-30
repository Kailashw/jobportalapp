import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FindJob from "./Routes/FindJob";
import Upskill from "./Routes/Upskill";
import NotFound from "./Routes/NotFound";

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
