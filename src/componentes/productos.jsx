import React, { useContext, useState } from "react";
import { Header } from "./header"
import { Carrito } from "./carrito"
import zapatillas from "../zapatillas.json"
import "./productos.css"
import { DataContext } from "../context/dataprovider";

export function Productos() {
    const [contador,setContador] = useState(0)

    console.log("contador: ", contador)
    
    

    const value = useContext(DataContext)

    const addCarrito = value.addCarrito
    //const [productos] = value.productos
    //console.log(productos)

    return (
        <>
            
            <h1>Productos - contador: {contador}</h1>
            
            <ul className="moviesGrid">
                {zapatillas.map(
                    (zapatilla) => (
                        <>
                            <div className="card">
                                <img src={zapatilla.image} class="card-img-top" alt={zapatilla.image} width="16%" />
                                <div className="card-body">
                                    <h3 className="card-title">{zapatilla.title}</h3>
                                    <p className="card-text">{zapatilla.category}</p>
                                    <p className="price">${zapatilla.price}</p>
                                </div>
                                <div className="button">
                                    <button className="btn btn-primary" onClick=""> Añadir al carrito</button>
                                    <a href="" className="btn btn-info">Vista</a>
                                </div>
                            </div>
                        </>
                    )
                )}
            </ul>
        </>

    )
}


