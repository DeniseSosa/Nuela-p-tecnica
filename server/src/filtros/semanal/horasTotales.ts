import { getProfesorByIdController } from "../../controllers/profesores/getProfesorByIdController"


export const horasTotales = (id:number) => {
     let sum =0
    const getProfesorById= getProfesorByIdController(id)
    let toArray = getProfesorById?.cursos.map((c)=>c.horas_semana.slice(0,1))
    if(toArray){
        for(let i=0; i < toArray.length; i++){
            sum += +toArray[i]
        }
        console.log(sum);
        

    }
    
    return sum
    
    
}






