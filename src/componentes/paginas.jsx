import React from "react";
import { Route } from "react-router-dom";
import {Inicio} from "./inicio"
import {Productos} from "./productos"

export const Paginas = () => {
    return (
        <div>
            <section>
               
                    <Route path="/" exact component={Inicio} />
                    <Route path="/productos" exact component={Productos} />
               
            </section>
        </div>
    )
}
