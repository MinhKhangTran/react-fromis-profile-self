import { Switch, Route, useLocation } from "react-router-dom";
import { Home, Disco, SingleDetail, Social } from "./pages";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <section className="w-screen overflow-hidden">
      <div className="">
        <Navbar />
      </div>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </section>
  );
}

export default App;
