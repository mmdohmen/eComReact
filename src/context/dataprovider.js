import React, { createContext, useState, useEffect } from "react";
import Data from "../zapatillas.json"

// cpntexto
export const DataContext = createContext()

export const DataProvider = (props) => {
    //const [productos, setProductos] = useState([])
    const [menu, setMenu] = useState(false)
    //const [contador,setContador] = useState(0)
    const [carrito, setCarrito] = useState([])

    /*
    useEffect( () => {
        const producto = Data.items
        if (producto) {
            setProductos(producto)
        } else {
            setProductos([])
        }
        
    }, [])
    */

    const addCarrito = (id) => {
        const check = carrito.every( item => {
            return item.id !== id
        })
        if (check) {
            const data = 1
        } else {

        }
    }

    const value = {
        //productos: [productos],
        menu: [menu, setMenu],
        
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito]
    }

    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )

}