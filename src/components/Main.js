import React from "react";
import { Routes, Route } from "react-router-dom"

import Home from "./Home/Home";
import Catalogo from '../../src/pages/Catalogo'
import Login from '../../src/components/Login/Login'
import Cuenta from '../../src/components/Cuenta/Cuenta'
import Pedido from '../../src/pages/Pedido'
// import Pagar from '../../src/pages/Pagar'

export default function Main () {
    return(
        <main className="container">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/Catalogo" element={<Catalogo/>}/>
                <Route path="/Pedido/:id" element={<Pedido/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Cuenta" element={<Cuenta/>}/>
                {/* <Route path="/Pagar" element={<Pagar/>}/> */}
            </Routes>
        </main>
    )
}