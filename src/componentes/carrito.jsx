import React, { useContext } from "react";
import IMG from "../images/img01.jpg"
import { DataContext } from "../context/dataprovider";

export function Carrito() {

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu            // variable q hace VISIBLE o no al CONTENIDO del CARRITO
    //console.log("menu carrito: ", menu)
    const [carrito, setCarrito] = value.carrito   // variable q guarda los PROCUTOS agregados al CARRITO
    const [total] = value.total

    // funcion q muestra el carrito
    const tooglefalse = () => {
        setMenu(false)
    }

    // variables p/ adoptar clases q permitan MOSTRAR el contenido del CARRITO
    const show1 = menu ? "carritos show" : "carritos"
    const show2 = menu ? "carrito show" : "carrito"
    //console.log("show1: ", show1)
    //console.log("show2: ", show2)

    // AUMENTAR o DISMINUIR la CANTIDAD de un producto
    const suma = id => {
        carrito.forEach( item => {
            if (item.id === id) {
                item.cantidad += 1
            }
            setCarrito([...carrito])
        })
    }
    const resta = id => {
        carrito.forEach( item => {
            if (item.id === id) {
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1
            }
            setCarrito([...carrito])
        })
    }

    // funcion q ELIMINA PRODUCTOS del CARRITO
    const removerProducto = id => {
        if (window.confirm("desea ELIMINAR el PRODUCTO del CARRITO ?...")) {
            carrito.forEach( (item, index) => {
                if (item.id === id) {
                    item.cantidad = 1
                    carrito.splice(index,1)
                }              
            })
            setCarrito([...carrito])
        }      
    }

    return (
        <div>
            <div className={show1}>
                <div className={show2}>
                    <div className="carrito_close" onClick={tooglefalse}>
                        <box-icon name="x"></box-icon>
                    </div>
                    <h2>Carrito</h2>

                    <div className="carrito_center">
                        { carrito.map( (producto) => (
                        <div className="carrito_item">
                            <img src={producto.image} alt="" />
                            <div>
                                <h3>{producto.title}</h3>
                                <p className="price">{producto.price}</p>
                            </div>
                            <div>
                                <box-icon name="up-arrow" type="solid" onClick={() => suma(producto.id)}></box-icon>
                                <p className="cantidad">{producto.cantidad}</p>
                                <box-icon name="down-arrow" type="solid" onClick={() => resta(producto.id)}></box-icon>
                            </div>
                            <div className="remove_item" onClick={() => removerProducto(producto.id)}>
                                <box-icon name="trash" type="solid"></box-icon>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className="carrito_footer">
                        <h3>Total:   ${total}</h3>
                        <button className="btn btn-light">Pagar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}