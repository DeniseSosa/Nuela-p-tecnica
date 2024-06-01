import {  useEffect, useState } from "react"

import { PropsProfe } from "../App";
import axios from "axios";


interface OnToggleProps {
    profId:PropsProfe
}


export const OnToggle : React.FC<OnToggleProps>= ({profId}) => {

    const [isOn, setIsOn]= useState <boolean> (true)

    const [horasTotalSemanal,setHorasTotal]= useState<number>(0)

 
  async function handleFilterSemanal () {
      try {
        const response= await axios.get(`http://localhost:3001/cursos/profesores/${profId.id}/semanal`)
        if(!response.data) throw new Error("sin datos")
          setHorasTotal(response.data)

        console.log(horasTotalSemanal);
        
      } catch (error) {
        console.log(error);
        
      }
    }

    useEffect(()=>{
        handleFilterSemanal()
    },[profId])

   return ( 
   <div className="flex justify-center">
    <div className="w-fit border-2 border-gray-100 rounded-xl bg-gray-100">
    {
        isOn
        ? ( 
    
        <div className="flex flex-col"> 
        <button 
        className=" w-28 p-2 m-1 rounded-xl focus:outline-none focus:ring focus:ring-gray-300 focus:bg-gray-300"
        onClick={handleFilterSemanal}>Semanal</button>
        <div className="flex flex-row">
        <div className="w-2/6 h-24 bg-gray-200 m-2 p-2 rounded-2xl"> Horas Totales 
        <h2>{horasTotalSemanal}</h2></div>
        <div className="w-2/6 h-24 bg-gray-300 m-2 p-2 rounded-2xl"> Horas Lectivas
        </div>
        <div className="w-2/6 h-24 bg-gray-400 m-2 p-2 rounded-2xl">Horas Complementarias
        </div>
  
        </div>
      </div>
      )
        : (<>
        <button 
        className=" w-28 p-2 m-1 rounded-xl focus:outline-none focus:ring focus:ring-gray-300 focus:bg-gray-300"
        onClick={handleFilterAnual}
        >Anual
        </button>
                <div className="flex flex-col"> 
                <div className="flex flex-row">
                <div className="w-2/6 h-24 bg-gray-200 m-2 p-2 rounded-2xl"> Horas Totales 
                <h2>{horasTotalAnuall}</h2></div>
                <div className="w-2/6 h-24 bg-gray-300 m-2 p-2 rounded-2xl"> Horas Lectivas
                </div>
                <div className="w-2/6 h-24 bg-gray-400 m-2 p-2 rounded-2xl">Horas Complementarias
                </div>
          
                </div>
              </div>
              </>)
    }
        
      </div>
      </div>
   )
    
}