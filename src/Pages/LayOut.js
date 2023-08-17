import React from "react";
import {Link, Outlet} from "react-router-dom"
export default function LayOut(){
    return (
        <>
        <nav>
        <ul>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Home</Link></li>
        </ul>
        </nav>
        <Outlet />
        </>
    )
}