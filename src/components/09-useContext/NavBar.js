import React from 'react'
import {  NavLink } from "react-router-dom"
import "./styles.css"


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink exact to="/" className="navbar-brand" >useContext</NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink activeClassName="activeLink" className="nav-link" aria-current="page" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="activeLink" className="nav-link" exact to="./about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="activeLink" className="nav-link" exact to="./login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
