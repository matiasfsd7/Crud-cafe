import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./components/views/Error404";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import DetalleProducto from "./components/views/DetalleProducto";
import CrearProducto from "./components/views/producto/CrearProducto";
import EditarProducto from "./components/views/producto/EditarProducto";
import Administrador from "./components/views/Administrador";
import Login from "./components/views/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./components/views/Registro";
import { useState } from "react";

function App() {
  const usuarioEnLinea =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || {};
  const [usuarioActivo, setUsuarioActivo] = useState(usuarioEnLinea);
  return (
    <BrowserRouter>
      <Menu
        menuUsuarioActivo={usuarioActivo}
        menuSetUsuarioActivo={setUsuarioActivo}
      ></Menu>

      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/login"
          element={<Login propsUsuarioActivo={setUsuarioActivo}></Login>}
        ></Route>
        <Route exact path="/registro" element={<Registro></Registro>}></Route>
        <Route
          exact
          path="/detalle"
          element={<DetalleProducto></DetalleProducto>}
        ></Route>
        <Route
          exact
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/administrador/crear"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/administrador/editar"
          element={<EditarProducto></EditarProducto>}
        ></Route>
        <Route exact path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
