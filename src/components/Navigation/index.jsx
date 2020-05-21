import React from "react";
import { Link } from "react-router-dom";
import TocSharpIcon from "@material-ui/icons/TocSharp";
import { TemporaryDrawer } from "../Drawer";
import "./navigation.scss";

const Navigation = () => (
  <div className="container-fluid">
    <nav className="nav">
      <div className="nav__section">
        <div className="brand">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/john-pels/image/upload/v1590034057/fandk.svg"
              alt="FandK-brand"
            />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/how">Customers</Link>
          </li>
          <li>
            {" "}
            <Link to="/faq">Product</Link>
          </li>
          <li>
            <Link to="/faq">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/how">Learn</Link>
          </li>
        </ul>
      </div>
      <div className="nav__section">
        <a href="google.com" rel="noopener noreferrer" className="btn-login">
          Log In
        </a>
        <a href="google.com" rel="noopener noreferrer" className="btn-create">
          Create a Free Account
        </a>
        <TemporaryDrawer openRight={<TocSharpIcon className="icon" />} />
      </div>
    </nav>
  </div>
);

export default Navigation;
