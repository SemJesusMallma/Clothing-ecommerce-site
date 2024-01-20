import React from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navigation navigation__product">
      <NavLink
        to="/home"
        className="navigation__link"
      >
        Inicio
      </NavLink>
      <NavLink
        to="/productos"
        className="navigation__link"
      >
        Productos
      </NavLink>
      <NavLink
        to="/contacto"
        className="navigation__link"
      >
        Contacto
      </NavLink>
      </nav>
    )
}