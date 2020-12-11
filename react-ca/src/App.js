import Header from "./Components/Home/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Game from "./Components/Game/Games";
import Home from "./Components/Home/Home";
import GameDetails from "./Components/Game/GameDetails";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/game/:id" component={GameDetails} />
        <Route path="/game" exact component={Game} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
