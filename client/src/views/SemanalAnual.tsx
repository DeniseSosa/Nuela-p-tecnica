//import React, { useState } from "react";
//import { PropsProfe } from "../App";
//import axios from "axios";

import React from "react";
import { HorasProfe } from "./Home";


// interface horasProfe extends PropsProfe{
//   horasTotal: number
// }
export const SemanalAnual:React.FC<HorasProfe>= ({onClickProfesor, horasTotal, profId}:HorasProfe) => {

//   const [horasTotal,setHorasTotal]= useState <number>(0)
// const handlefilterSemanal = async() => {
//   try {
//     const response= await axios.get(`http://localhost:3001/cursos/profesores/${profId?.id}/semanal`)
//     if(!response.data) throw new Error("sin datos")
//       setHorasTotal(response.data)
//     console.log(horasTotal);
    
//   } catch (error) {
//     console.log(error);
    
//   }
// }
    
  return (
    <div className="flex flex-col">
        <div className="flex justify-center">
        <div className="w-fit border-2 border-gray-100 rounded-xl bg-gray-100">
          <button 
          className=" w-28 p-2 m-1 rounded-xl focus:outline-none focus:ring focus:ring-gray-300 focus:bg-gray-300"
          onClick={()=>onClickProfesor(profId)}>
            Semanal</button>
          <button 
          className=" w-28 p-2 m-1 rounded-xl focus:outline-none focus:ring focus:ring-gray-300 focus:bg-gray-300">
            Anual</button>
      </div>
      </div>
      <div className="flex flex-row">
      <div className="w-2/6 h-24 bg-gray-200 m-2 p-2 rounded-2xl"> Horas Totales 
      <h2>{horasTotal}</h2></div>

      <div className="w-2/6 h-24 bg-gray-300 m-2 p-2 rounded-2xl"> Horas Lectivas
      </div>
      <div className="w-2/6 h-24 bg-gray-400 m-2 p-2 rounded-2xl">Horas Complementarias
      </div>

      </div>
    </div>
  );
};
