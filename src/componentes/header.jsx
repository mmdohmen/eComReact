import React, { useState, useContext } from "react";
import logo from "../images/zapatilla.png"
import "./header.css"
import { DataContext } from "../context/dataprovider";

export function Header(props) {

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [carrito] = value.carrito

    console.log("menu = ", menu)

    // funcion q muestra o no el carrito
    const tooglemenu = () => {
        setMenu(!menu)
    }

    console.log("props: ", props)
    const contador = props.value
    return (
        <header className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">

                <a className="navbar-brand" href="/">
                    <div className="logo">
                        <img src={logo} alt="logo" width="150px"></img>
                    </div>
                </a>

                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link active" href="/">INICIO</a></li>
                    <li className="nav-item"><a className="nav-link active" href="/productos">PRODUCTOS</a></li>
                </ul>

                <div className="cart" onClick={tooglemenu}>
                    <box-icon name="cart"></box-icon>
                    <span className="">{carrito.length}</span>
                </div>

            </div>
        </header>
    )
}