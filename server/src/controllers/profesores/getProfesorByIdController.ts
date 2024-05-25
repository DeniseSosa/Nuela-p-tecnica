import { ProfesoresEntry } from "../../types/types";
import profesores from "../../../api/api.json";

const prof : ProfesoresEntry[] = profesores as ProfesoresEntry[]

 export const getProfesorByIdController = (id:number) : ProfesoresEntry|  undefined =>{
    const profById =  prof.find(p=> p.id === +id)
    return profById  
}

//console.log(getProfesorByIdController(9), "controller");








