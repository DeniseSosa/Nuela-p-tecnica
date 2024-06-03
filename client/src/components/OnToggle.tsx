import {  useEffect, useState } from "react"

import { PropsProfe } from "../App";
import axios from "axios";


export interface OnToggleProps {
    profId:PropsProfe
}

export type semanal = {
  horas_total: number,
  horas_lectivas: number,
  horas_complementarias: number

}

export const OnToggle : React.FC<OnToggleProps>= ({profId}) => {

    const [isOn, setIsOn]= useState <boolean> (true)

    const [horasTotalSemanal,setHorasTotal]= useState<semanal>({
      horas_total: 0,
      horas_lectivas: 0,
      horas_complementarias:0
    })

 
  async function handleFilterSemanal () {
      try {
        const response= await axios.get(`http://localhost:3001/cursos/profesores/${profId.id}/semanal`)
        const response2= await axios.get(`http://localhost:3001/cursos/profesores/${profId.id}/semanal/lectivas`)
        const response3= await axios.get(`http://localhost:3001/cursos/profesores/${profId.id}/semanal/complementarias`)
        if(!response.data && !response2.data && !response3.data) throw new Error("sin datos")
          setHorasTotal({
      horas_total: response.data,
    horas_lectivas: response2.data,
  horas_complementarias: response3.data})

        console.log(horasTotalSemanal);
        
      } catch (error) {
        console.log(error);
        
      }
    }
    async function handleFilterAnual() {
      
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
        <h2>{horasTotalSemanal.horas_total}</h2></div>
        <div className="w-2/6 h-24 bg-gray-300 m-2 p-2 rounded-2xl"> Horas Lectivas
        <h2>{horasTotalSemanal.horas_lectivas}</h2>
        </div>
        <div className="w-2/6 h-24 bg-gray-400 m-2 p-2 rounded-2xl">Horas Complementarias
        <h2>{horasTotalSemanal.horas_complementarias}</h2>
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