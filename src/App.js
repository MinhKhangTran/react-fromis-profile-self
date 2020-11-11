import { Switch, Route } from "react-router-dom";
import { Home, Disco, SingleDetail, Social } from "./pages";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/disco">
          <Disco />
        </Route>
        <Route path="/disco/:id">
          <SingleDetail />
        </Route>
        <Route path="/social">
          <Social />
        </Route>
      </Switch>
    </>
  );
}

export default App;
