import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useEffect, useState } from "react";
import { listarProductos } from "../helpers/queries";
import Swal from "sweetalert2";

const Inicio = () => {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    listarProductos().then((respuestaProductos) => {
      if (respuestaProductos) {
        //actualizar el estado
        setListaProductos(respuestaProductos);
      } else {
        Swal.fire(
          "Ocurrio un Error!",
          "Algo no salio bien T_T, intente mas tarde",
          "error"
        );
      }
    });
  }, []);

  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="fondo cafe"
      />
      <Container>
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
        <Row>
          <CardProducto></CardProducto>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
