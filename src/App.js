import { HashRouter as Router, Switch, Route } from "react-router-dom"; 
import NavigationBar from "./components/NavigationBar.js";
import './App.css';
import About from "./components/About.js";
import Store from "./components/Store.js";
import FAQ from "./components/FAQ.js";
import Home from "./components/Home.js";



function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
