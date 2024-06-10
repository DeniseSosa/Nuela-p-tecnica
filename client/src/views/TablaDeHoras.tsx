import axios from "axios"
import {  Profe } from "../App"
import { useEffect, useState } from "react"

export interface Cursos {
    asignatura: string,
    tipo: "obligatoria" | "optativa",
    curso: string,
    grupo: string,
    horas_semana: string,
    espacio_regular: string
    }
export interface TablaDeHorasProps{
    profId: Profe
}
export const TablaDeHoras : React.FC <TablaDeHorasProps> = ({profId}) => {

    const [cursos,setCursos] = useState<Cursos[]>([])

    useEffect(()=>{
        async function ProfeDetail () {
            try {
             const {data} = await axios.get(`http://localhost:3001/cursos/profesores/${profId.id}`) 
             console.log(data);
             setCursos(data)
            } catch (error) {
                console.log(error);
                
            }
        }
        ProfeDetail()
    },[profId.id])




    return (
        <div className="m-4 p-4">
            <div>
                <button>Horas Lectivas</button>
                <button>Horas Complementarias</button>
            </div>
            <div className="flex justify-end">
                <button className="bg-indigo-600 p-2 m-2 rounded-xl text-white font-bold"> +  Anadir Asignatura</button>
            </div>
        <div className="grid grid-cols-8 border-2 rounded-xl">

            <div className="border-b-2 px-4 py-2.5 bg-gray-100 text-zinc-400 font-semibold">
          <p>Nombre</p>
            </div>
            <div className="border-b-2  p-2.5 bg-gray-100  text-zinc-400 font-semibold">
            <p>Tipo</p>
            </div>
            <div className="border-b-2  p-2.5 bg-gray-100  text-zinc-400 font-semibold">
            <p>Curso</p>
            </div>
            <div className="border-b-2 p-2.5 bg-gray-100  text-zinc-400 font-semibold">
            <p>Grupo</p>
            </div>
            <div className="border-b-2  p-2.5 bg-gray-100  text-zinc-400 font-semibold">
            <p>Horas Semana</p>
            </div>
            <div className="border-b-2  p-2.5 bg-gray-100 text-zinc-400 font-semibold">
            <p>Espacio Regular</p>
            </div>
            <div className="col-span-2 border-b-2 px-4 py-2.5 bg-gray-100  text-zinc-400 font-semibold">
            <p className="text-center">Acciones</p>
            </div>
{
    cursos.map(c => {
        return (
            <>
        <div className="border-b-2 px-4 py-2 bg-white font-semibold">
            <p>{c.asignatura}</p>
            </div>
            <div className="border-b-2 px-4 py-2 bg-white font-semibold">
            <p>{c.tipo}</p>
            </div>
            <div className="border-b-2 px-4 py-2 bg-white font-semibold">
            <p>{c.curso}</p>
            </div>
            <div className="border-b-2 px-4 py-2 bg-white font-semibold">
            <p>{c.grupo}</p>
            </div>
            <div className="border-b-2 px-4 py-2 bg-white font-semibold">
            <p>{c.horas_semana}</p>
            </div>
            <div className="border-b-2 px-4 py-2 bg-white font-semibold">
            <p>{c.espacio_regular}</p>
        </div>
        <div className="col-span-2 border-b-2 px-4 py-2 bg-white font-semibold">
            <div className="flex flex-row justify-center">
            <p className="px-2 text-indigo-500" role="button">Ver</p>
            <p className="px-2 text-indigo-500" role="button">Editar</p>
            <p className="px-2 text-red-500 " role="button">Eliminar</p>
            </div>
            </div>
        </>)
    })
}

        </div>

        </div>

    )
}