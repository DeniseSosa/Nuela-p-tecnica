import { CursosEntry } from "../../types/types"
import { getProfesorByIdController } from "../profesores/getProfesorByIdController"

export const postCursoController = (id:number, cursos: CursosEntry) => {
    const profesor= getProfesorByIdController(id)
    profesor?.cursos.push(cursos) 
    return profesor
   // console.log(profesor?.cursos);
    

}
