import React from "react";
import AccountsUIWrapper from "./AccountsUIWrapper";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img
          src="/knight.png"
          className="d-inline-block"
          alt="logo"
          id="logo"
        />
        SponTales
      </a>
      <form className="form-inline">
        <AccountsUIWrapper />
      </form>
    </nav>
  );
};

export default Navbar;
