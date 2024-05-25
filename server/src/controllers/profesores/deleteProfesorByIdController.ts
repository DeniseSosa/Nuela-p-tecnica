import { prof } from "./getProfesoresController"
export const deleteProfesorByIdController = (id: number) => {
    let ProfesoFiltered = prof.filter(p=> p.id !== id)
    console.log(ProfesoFiltered);
    return ProfesoFiltered
    
}

//console.log(deleteProfesorByIdController(3));
