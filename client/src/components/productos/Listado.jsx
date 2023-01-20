import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {Link} from 'react-router-dom'
const urlProductos = "http://localhost:3100/productos";

const Listado = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    mostrarProductos();
  }, []);

  const mostrarProductos = async () => {
    const res = await axios.get(urlProductos);
    setProductos(res.data);
    console.log(res.data);
  };

  const eliminarProducto = async (id) => {
    await axios.delete(`${urlProductos}/${id}`)
    mostrarProductos()
  }

  return (
    <section className="container mt-5">
      <Link to={'/crear'} className="btn btn-success form-control" >Crear Producto</Link>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <td>Acciones</td>
            <td>Referencia</td>
            <td>Nombre</td>
            <td>Descripción</td>
            <td>Cantidad</td>
            <td>Valor</td>
            <td>Categoría</td>
            <td>Gama</td>
            <td>Imagen</td>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr>
              <td>
                <button onClick={()=> eliminarProducto(producto.id) } className="btn btn-danger form-control">Eliminar</button>
                <Link to={`/editar/${producto.id}`} className="btn btn-warning form-control" >Editar</Link>
              </td>
              <td>{producto.referencia}</td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.valor}</td>
              <td>{producto.categoria}</td>
              <td>{producto.gama}</td>
              <td>
                <img src={`${producto.imagen}`} alt="Logo" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Listado;
