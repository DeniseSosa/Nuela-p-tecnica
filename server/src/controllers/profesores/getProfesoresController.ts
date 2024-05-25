import profesores from "../../../api/api.json"
import { ProfesoresEntry } from "../../types/types"

export const prof: ProfesoresEntry[] = profesores as ProfesoresEntry[]

export const getProfesoresController = (): ProfesoresEntry[] =>{
    return prof
}  

//console.log(prof);




