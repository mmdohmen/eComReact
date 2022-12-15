import React from "react";
import zapatilla from "./productos"
import IMG from "../images/img01.jpg"

/*
export function ProductosCard ({zapatilla}) {
    const imgURL = "../images/" + zapatilla.imagen
    return(
        <li className="card">
            <img className="movieImage" src={imgURL} alt={zapatilla.title} />
            <div>{zapatilla.nombre}</div>
        </li>
    )
}
*/


export const ProductosCard = ({zapatilla}) => {
    console.log(zapatilla)
    return (

        <>
            <div className="card">  
                    <div className="producto">
                        <img src="C:\Users\mmdoh\Documents\cursos\Codo a Codo - React\integrador\ecommerce-app\src\images\img01.jpg" alt="imagen" width="16%"></img>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title">nombre</h1>
                        <p className="card-text">Categoria</p>
                        <p className="price">$ 250</p>
                    </div>
                    <div className="button">
                        <button className="btn btn-primary"> Añadir al carrito</button>
                        <a href="btn btn-info">Vista</a>
                    </div>
                
            </div>
        </>
    )
}

