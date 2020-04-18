import React from "react";
import { withRouter, NavLink } from "react-router-dom";

const Header = () =>{
    return <div>
        <div>
        <NavLink to="/">Home</NavLink>{" "}
        <NavLink to="/register">Register</NavLink>{" "}
        <NavLink to="/todo">Todo</NavLink>
        </div>
    </div>
}

export default Header;