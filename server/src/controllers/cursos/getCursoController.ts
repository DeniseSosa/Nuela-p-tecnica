
import { getProfesorByIdController } from "../profesores/getProfesorByIdController"

export const getCursoController = (id:number) => {
   const ProfesorFinded = getProfesorByIdController(id)
   const profesorMap= ProfesorFinded?.cursos.map(c=>{
    return {
        "asignatura": c.asignatura,
        "tipo": c.tipo,
        "curso": c.curso,
       "grupo": c.grupo,
        "horas_semana": c.horas_semana,
        "espacio_regular": c.espacio_regular
    }
    })
    return profesorMap
}