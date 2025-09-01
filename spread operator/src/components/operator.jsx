import { useState } from "react";

//EJEMPLO EN CLASE

export function OperatorExample() {
  const [nums, setNums] = useState([1, 2, 3, 4, 5]);
  const [persona, setPersona] = useState({
    name: "Federico",
    alumno: "Thiago",
  });

  //arrow function
  const addNums = () => {
    setNums([...nums, 6]);
  };

  const updateName = () => {
    setPersona({ ...persona, name: "Miguel", edad: 80 });
    console.log(persona);
  };

  return (
    <>
      {nums.map((num, index) => (
        <p key={index}>{num}</p>
      ))}
      <h3>Spread Operator</h3>
      <button onClick={addNums}>agregar numeros</button>
      <button onClick={updateName}>modificar persona</button>
    </>
  );
}

//EJERCICIO N1

export function Operator() {
  const [nums, setNums] = useState([1, 2, 3, 4, 5]);

  const addNums = () => {
    setNums((prev) => [...prev, prev[prev.length - 1] + 1]);
  };

  return (
    <>
      <h3>Números consecutivos</h3>
      {nums.map((num, index) => (
        <p key={index}>{num}</p>
      ))}
      <button onClick={addNums}>Agregar número</button>
    </>
  );
}

//EJERCICIO N3

export function Ofertas() {
  const productos = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
  ];

  const productosConDescuento = productos.map((producto) => ({
    ...producto,
    descuento: true,
  }));

  return (
    <>
      <h4>productos con descuento</h4>
      {productosConDescuento.map((producto, index) => (
        <p key={index}>
          {producto.nombre} - {String(producto.descuento)} - {producto.precio}
        </p>
      ))}
    </>
  );
}
