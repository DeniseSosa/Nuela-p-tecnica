import React, { useState } from "react";
import { PropsProfe } from "../App";
import axios from "axios";
import { OnTogle } from "../components/onToggle";

// export interface HorasProfe extends PropsProfe{
//   horasTotal: number
// }


export const Semanal: React.FC= () => {

  const [horasTotalSemanal,setHorasTotal]= useState<number>(0)

 
  async function handleFilterSemanal ({profId}:PropsProfe) {
      try {
        const response= await axios.get(`http://localhost:3001/cursos/profesores/${profId?.id}/semanal`)
        if(!response.data) throw new Error("sin datos")
          setHorasTotal(response.data)

        console.log(horasTotalSemanal);
        
      } catch (error) {
        console.log(error);
        
      }
    }
   
  return (
    <div className="flex flex-col"> 
    <OnTogle handleFilterSemanal= {handleFilterSemanal}/>
      <div className="flex flex-row">
      <div className="w-2/6 h-24 bg-gray-200 m-2 p-2 rounded-2xl"> Horas Totales 
      <h2>{horasTotalSemanal}</h2></div>
      <div className="w-2/6 h-24 bg-gray-300 m-2 p-2 rounded-2xl"> Horas Lectivas
      </div>
      <div className="w-2/6 h-24 bg-gray-400 m-2 p-2 rounded-2xl">Horas Complementarias
      </div>

      </div>
    </div>
  );
};
