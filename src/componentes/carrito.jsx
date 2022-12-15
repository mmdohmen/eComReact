import React, { useContext } from "react";
import IMG from "../images/img01.jpg"
import { DataContext } from "../context/dataprovider";

export function Carrito() {

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu

    console.log("menu carrito: ", menu)

    const tooglefalse = () => {
        setMenu(false)
    }

    const show1 = menu ? "carritos show" : "carritos"
    const show2 = menu ? "carrito show" : "carrito"

    console.log("show1: ", show1)
    console.log("show2: ", show2)

    return (
        <div>
            <div className={show1}>
                <div className={show2}>
                    <div className="carrito_close" onClick={tooglefalse}>
                        <box-icon name="x"></box-icon>
                    </div>
                    <h2>Carrito</h2>

                    <div className="carrito_center">
                        <div className="carrito_item">
                            <img src={IMG} alt="" />
                            <div>
                                <h3>title</h3>
                                <p className="price">3456</p>
                            </div>
                            <div>
                                <box-icon name="up-arrow" type="solid"></box-icon>
                                <p className="cantidad">1</p>
                                <box-icon name="down-arrow" type="solid"></box-icon>
                            </div>
                            <div className="remove_item">
                                <box-icon name="trash" type="solid"></box-icon>
                            </div>
                        </div>
                    </div>

                    <div className="carrito_footer">
                        <h3>Total:   $2579</h3>
                        <button className="btn btn-light">Pagar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}