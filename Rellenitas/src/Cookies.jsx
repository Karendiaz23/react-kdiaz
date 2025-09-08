export default function Cookies() {
  const cookies = [
    { nombre: "COOKIES DE CHOCOLATE", imagen: "/assets/cookie-chocolate.jpg" },
    { nombre: "COOKIES DE AVENA", imagen: "/assets/cookie-avena.jpg" },
    { nombre: "COOKIES DE FRUTA", imagen: "/assets/cookie-fruta.jpg" },
    { nombre: "COOKIES DE VAINILLA", imagen: "/assets/cookie-vainilla.jpg" },
    { nombre: "COOKIES DE OREO", imagen: "/assets/cookie-oreo.jpg" },
  ];

  return (
    <div className="bg-amber-200 min-h-screen flex flex-col items-center py-10">
      {/* Título */}
      <h2 className="text-4xl font-bold text-brown-800 mb-10">
        NUESTRAS COOKIES
      </h2>

      {/* Primera fila */}
      <div className="flex gap-10 mb-10">
        {cookies.slice(0, 2).map((cookie, i) => (
          <div key={i} className="text-center">
            <img
              src={cookie.imagen}
              alt={cookie.nombre}
              className="w-60 h-60 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-3 font-semibold text-brown-900">{cookie.nombre}</p>
          </div>
        ))}
      </div>

      {/* Segunda fila */}
      <div className="flex gap-10">
        {cookies.slice(2).map((cookie, i) => (
          <div key={i} className="text-center">
            <img
              src={cookie.imagen}
              alt={cookie.nombre}
              className="w-48 h-48 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-3 font-semibold text-brown-900">{cookie.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
