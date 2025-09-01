import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Ofertas, Operator } from "./components/operator";
//import Persona from "./components/persona";

function App() {
 const [count, setCount] = useState(0);


 useEffect(() => {
   //useEffect ejecuta el codigo una vez si no hay nada en los
   //corchetes, y si hay variables(dependencias)
   //se va a ejecutar tanto como actualice
 }, []);


 return (
   <>
   <Operator/>
     <Ofertas />

   </>
 );
}


export default App;
