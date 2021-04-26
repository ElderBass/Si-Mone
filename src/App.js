import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default App;
