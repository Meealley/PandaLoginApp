import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";
import "./Navigation.css";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          {ctx.login && (
            <li>
              <a href="/">User</a>
            </li>
          )}
          {ctx.login && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.login && (
            <li>
              <button type="submit" onClick={ctx.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
