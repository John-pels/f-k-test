import React from "react";
import TocSharpIcon from "@material-ui/icons/TocSharp";
import { TemporaryDrawer } from "../Drawer";
import "./navigation.scss";

const Navigation = () => (
  <div className="container-fluid">
    <nav className="nav">
      <div className="nav__section">
        <div className="brand">
          <img
            src="https://res.cloudinary.com/john-pels/image/upload/v1590034057/fandk.svg"
            alt="FandK-brand"
          />
        </div>
        <ul>
          <li>Customers</li>
          <li>Product</li>
          <li>About</li>
          <li>Learn</li>
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
