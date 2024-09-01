import "./App.css";
import { Link } from "react-router-dom";
import { Outlet} from "react-router-dom"

function App() {
  return (
    <div>
      <nav className="nav">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/faqs">Faqs</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
