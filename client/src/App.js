import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/register" exact render={() => <Register />} />
        <Route path="/login" exact render={() => <Login />} />
      </Router>
    </>
  );
}

export default App;
