import { TodoWrapper } from "./components/TodoWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
}

export default App;
