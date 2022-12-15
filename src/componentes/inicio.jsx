import React from "react";
import { Header } from "./header"
import IMG from "../images/inicio.jpg"

export const Inicio = () => {
    const datos = {value: 25}
    return (
        <div>
            
            <h1>Sneakers E-shop</h1>
            <img src={IMG} alt="" width="100%" />
        </div>
    )
}