import axios from "axios"
import {  Profe } from "../App"
import { useEffect, useState } from "react"


export interface TablaDeHorasProps{
    profId: Profe
}
export const TablaDeHoras : React.FC <TablaDeHorasProps> = ({profId}) => {

    const [cursos,setCursos] = useState<[]>([])

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
        <>
        <div className="grid grid-cols-7 gap-4">

            <div>
          <p>Nombre</p>
            </div>
            <div>
            <p>Tipo</p>
            </div>
            <div>
            <p>Curso</p>
            </div>
            <div>
            <p>Grupo</p>
            </div>
            <div>
            <p>Horas Semana</p>
            </div>
            <div>
            <p>Espacio Regular</p>
            </div>
            <div>
            <p>Acciones</p>
            </div>
{
    cursos.map(c => {
        return (
            <>
        <div>
            <p>{c.asignatura}</p>
            </div>
            <div>
            <p>{c.tipo}</p>
            </div>
            <div>
            <p>{c.curso}</p>
            </div>
            <div>
            <p>{c.grupo}</p>
            </div>
            <div>
            <p>{c.horas_semana}</p>
            </div>
            <div>
            <p>{c.espacio_regular}</p>
        </div>
        <div>
            <p role="button">Ver</p>
            <p role="button">Editar</p>
            <p role="button">Eliminar</p>
            </div>
        </>)
    })
}

        </div>

        </>

    )
}