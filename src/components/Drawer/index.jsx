import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
});
const listStyles = {
  background: "#1624b4",
  height: "100vh",
};
const ulStyles = {
  color: "#FFF",
  listStyleType: "none",
  fontSize: "1.5em",
  padding: "1em",
};
const btnLogin = {
  width: "137px !important",
  padding: "1em",
  color: "#fff",
  textAlign: "center",
  lineHeight: "67px",
  textDecoration: "none",
  marginLeft: "1em",
  background: "#2336ff",
  borderRadius: "20px",
  fontWeight: "500",
  fontSize: "20px",
  letterSpacing: "-0.01em",
  marginRight: "1em",
};
const aStyles = {
  color: "#FFF",
  textDecoration: "none",
};
const btnCreate = {
  width: "291px",
  padding: "1em",
  marginLeft: "1em",
  color: "#0d2b76",
  textAlign: "center",
  lineHeight: "67px",
  textDecoration: "none",
  background: "#dee1ff",
  borderRadius: "20px",
  boxShadow: "3px - 5px 27px rgba(16, 26, 123, 0.44)",
  fontWeight: "600",
  fontSize: "20px",
  letterSpacing: "-0.01em",
  marginRight: "1em",
};

export function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List style={listStyles}>
        <ul style={ulStyles}>
          <li>
            <Link to="/faq" style={aStyles}>
              Customers
            </Link>
          </li>
          <li>
            <Link to="/how" style={aStyles}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/faq" style={aStyles}>
              About
            </Link>
          </li>
          <li>
            <Link to="/how" style={aStyles}>
              Learn
            </Link>
          </li>
        </ul>
        <a href="/" rel="noopener noreferrer" style={btnLogin}>
          Log In
        </a>{" "}
        <br />
        <br />
        <a href="/how" rel="noopener noreferrer" style={btnCreate}>
          Create a Free Account
        </a>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>{props.openRight}</Button>

      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>

      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}
