import React from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState } from "react";
const urlProductos = 'http://localhost:3100/productos'

const Crear = () => {
  const [referencia, setReferencia] = useState('')
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [valor, setValor] = useState('')
  const [categoria, setCategoria] = useState('')
  const [gama, setGama] = useState('')
  const [imagen, setImagen] = useState('')

  return (
    <section className="container bg-warning p-5">
      <form className="form-control p-5" action="">
        <section className="row">
          <section className="col">
            <input onChange={(e)=>setReferencia(e.target.value)} value={referencia} placeholder="Referencia" className="form-control" type="text" />
            <input onChange={(e)=>setNombre(e.target.value)} value={nombre} placeholder="Nombre" className="form-control" type="text" />
            <input onChange={(e)=>setDescripcion(e.target.value)} value={descripcion} placeholder="Descripcion" className="form-control" type="text" />
            <input onChange={(e)=>setValor(e.target.value)} value={cantidad} placeholder="Cantidad" className="form-control" type="text" />
          </section>
          <section className="col">
            <input onChange={(e)=>setCantidad(e.target.value)} value={valor} placeholder="Valor" className="form-control" type="text" />
            <input onChange={(e)=>setCategoria(e.target.value)} value={categoria} placeholder="Categoria" className="form-control" type="text" />
            <input onChange={(e)=>setGama(e.target.value)}value={gama} placeholder="Gama" className="form-control" type="text" />
            <input onChange={(e)=>setImagen(e.target.value)} value={imagen} placeholder="Imagen" className="form-control" type="text" />
          </section>
        </section>
        <section className="row">
          <Link to={'/productos'} className="btn btn-danger form-control" >Cancelar</Link>
          <button className="btn btn-success form-control" >Guardar</button>
        </section>
      </form>
    </section>
  );
};

export default Crear;
