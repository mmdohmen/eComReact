import React from "react"

import 'boxicons'

import { Productos } from "./componentes/productos"
import { Header } from "./componentes/header"
import { Carrito } from "./componentes/carrito"
import { Inicio } from "./componentes/inicio"
import { Paginas } from "./componentes/paginas"
import { DataProvider } from "./context/dataprovider"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const datos = 0
  return (
    <DataProvider>
      <div className="App">
        <h1>Ecommerce</h1>
        <Header props={datos} />

        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/productos" element={<Productos />} />
            </Routes>
          </BrowserRouter>

          <Carrito />
        </main>


      </div>
    </DataProvider>
  );
}

export default App;
