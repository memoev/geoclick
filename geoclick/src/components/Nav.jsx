import React, { Component } from "react";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="/">
        Navbar
      </a>
      <div class="navbar" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/">
            Home <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link" href="/">
            Features
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;