import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const urlProductos = "http://localhost:3100/productos";

const Editar = () => {
  const [referencia, setReferencia] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [gama, setGama] = useState("");
  const [imagen, setImagen] = useState("");
  const navigate = useNavigate();
  const {id} = useParams()

  const actualizarProducto = async (e) => {
    e.preventDefault()
    const producto = {
      referencia,
      nombre,
      descripcion,
      cantidad,
      valor,
      categoria,
      gama,
      imagen,
    };
    await axios.put(`${urlProductos}/${id}`, producto);
    navigate('/productos')
  };

  const listarProducto = async () => {
    const res = await axios.get(`${urlProductos}/${id}`)
    setReferencia(res.data.referencia)
    setNombre(res.data.nombre)
    setDescripcion(res.data.descripcion)
    setCantidad(res.data.cantidad)
    setValor(res.data.valor)
    setCategoria(res.data.categoria)
    setGama(res.data.gama)
    setImagen(res.data.imagen)
  }

  useEffect(()=> {
    listarProducto()
  }, [])
  
  return (
    <section className="container bg-warning p-5">
      <form  className="form-control p-5">
        <section className="row">
          <section className="col">
            <input
              onChange={(e) => setReferencia(e.target.value)}
              value={referencia}
              placeholder="Referencia"
              className="form-control"
              type="text"
            />
            <input
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              placeholder="Nombre"
              className="form-control"
              type="text"
            />
            <input
              onChange={(e) => setDescripcion(e.target.value)}
              value={descripcion}
              placeholder="Descripcion"
              className="form-control"
              type="text"
            />
            <input
              onChange={(e) => setCantidad(e.target.value)}
              value={cantidad}
              placeholder="Cantidad"
              className="form-control"
              type="text"
            />
          </section>
          <section className="col">
            <input
              onChange={(e) => setValor(e.target.value)}
              value={valor}
              placeholder="Valor"
              className="form-control"
              type="text"
            />
            <input
              onChange={(e) => setCategoria(e.target.value)}
              value={categoria}
              placeholder="Categoria"
              className="form-control"
              type="text"
            />
            <input
              onChange={(e) => setGama(e.target.value)}
              value={gama}
              placeholder="Gama"
              className="form-control"
              type="text"
            />
            <input
              onChange={(e) => setImagen(e.target.value)}
              value={imagen}
              placeholder="Imagen"
              className="form-control"
              type="text"
            />
          </section>
        </section>
        <section className="row">
          <Link to={"/productos"} className="btn btn-danger form-control">
            Cancelar
          </Link>
          <button onClick={actualizarProducto} className="btn btn-success form-control">Actualizar</button>
        </section>
      </form>
    </section>
  );
};

export default Editar;
