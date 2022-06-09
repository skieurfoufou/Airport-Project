import "./Header.css";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      Airport Project - Material UI
      <img src={logo} className="App-logo" alt="logo" />
      <div className="container-header">
        <Link to={`/TableDepartures`} className="header-link">
          <div className="nav-bar">
            <h4 className="title-of-navBar">DEPARTURES</h4>
          </div>
        </Link>
        <Link to={`/AddFlight`} className="header-link">
          <div className="nav-bar">
            <h4 className="title-of-navBar">ADD FLIGHT</h4>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
