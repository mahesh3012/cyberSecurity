import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Survey } from "./components/Survey";
import {Availability} from "./components/Availability";
import {Confidentiality} from "./components/Confidentiality";
import {Integrity} from "./components/Integrity";
import {Privacy} from "./components/Privacy";
import {Result} from "./components/Result";
import {About} from "./components/About"
import { Contact } from "./components/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>

        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/survey">
            <Survey />
          </Route>

          <Route exact path="/availability">
            <Availability />
          </Route>

          <Route exact path="/confidentiality">
            <Confidentiality />
          </Route>

          <Route exact path="/integrity">
            <Integrity />
          </Route>

          <Route exact path="/privacy">
            <Privacy />
          </Route>

          <Route exact path="/result">
            <Result/>
          </Route>

          <Route exact path="/about">
            <About/>
          </Route>

          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
