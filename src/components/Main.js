import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home"

function Main(props) {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" render={(rp) => <Home {...rp} />} />
        </Switch>
      </Router>
    </main>
  );
}

export default Main;
