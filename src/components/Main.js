// import React, { Profiler } from "react";
import { Routes, Route } from "react-router-dom"

import Home from "./Home/Home";
import Catalogo from '../../src/pages/Catalogo'
import Login from '../../src/components/Login/Login'
import Registro from './Registro/Registro'
import Pedido from '../../src/pages/Pedido'
import Perfil from '../components/Profile/Profile'
import Carrito from '../../src/components/Carrito/Carrito'


export default function Main () {
    return(
        <>
            <Routes>
                {/* RUTAS PRIVADAS */}
                <Route path="/profile" element={<Perfil/>}/>

                {/* RUTAS DE AUTENTICACIÓN */}
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Login/>}/>
                <Route path="/registro" element={<Registro/>}/>                

                {/* RUTAS PÚBLICAS */}
                <Route index path="/" element={<Home/>}/>
                <Route path="/catalogo" element={<Catalogo/>}/>
                <Route path="/pedido/:id" element={<Pedido/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
            </Routes>
        </>
    )
}