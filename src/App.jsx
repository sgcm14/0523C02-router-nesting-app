import { Link, Outlet } from "react-router-dom";
import "./App.css";

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
