import React, { createContext, useState, useEffect } from "react";
import zapatillas from "../zapatillas.json"

// cpntexto
export const DataContext = createContext()

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([])
    const [menu, setMenu] = useState(false)      // variable q muestra el carrito al clickear sobre el icono
    //const [contador,setContador] = useState(0)
    const [carrito, setCarrito] = useState([])   // variable q guarda el contenido del carrito
    const [total, setTotal] = useState(0)        // variable q guarda el monto total del carrito
    
    useEffect( () => {
        const producto = zapatillas
        if (producto) {
            setProductos(producto)
        } else {
            setProductos([])
        }
    }, [])
    

    const addCarrito = (id) => {
        const check = carrito.every(item => {
            return item.id !== id
        })
        if (check) {
            const data = productos.filter(producto => {
                return producto.id === id
            })
            setCarrito([...carrito, ...data])
        } else {
            alert("El PRODUCTO ya SE ENCUENTRA en el CARRITO ...")
        }
    }

    useEffect( () => {
        localStorage.setItem("dataCarrito", JSON.stringify(carrito))
    }, [carrito])

    useEffect( () => {
        const getTotal = () => {
            const resultado = carrito.reduce( (prev,item) => {
                return prev + (item.price * item.cantidad)
            }, 0)
            setTotal(resultado)
        }
        getTotal()
    }, [carrito])

    useEffect( () => {
        const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito"))
        if (dataCarrito) {
                setCarrito(dataCarrito)
        }
    }, [])

    const value = {
        //productos: [productos],
        menu: [menu, setMenu],

        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total, setTotal]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )

}