import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import NavigationBar from "./components/NavigationBar.js";
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />

        <Switch>
          <Route path="/about">Este es mi about</Route>
          <Route path="/faq">Este es mi FAQ</Route>
          <Route path="/store">Este es mi Store</Route>
          <Route path="/">Este es mi Home</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
