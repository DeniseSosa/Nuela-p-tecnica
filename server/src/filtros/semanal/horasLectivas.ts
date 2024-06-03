import { getProfesorByIdController } from "../../controllers/profesores/getProfesorByIdController"


export const horasLectivas =(id:number) => {
    const getProfesorById= getProfesorByIdController(id)

    let sum =0
    const lectivas= getProfesorById?.cursos.map(c => {
        let oblig = 0
         if(c.tipo=== "obligatoria"){ 
            let oblig = c.horas_semana.slice(0,1)
        return oblig
    }
        return oblig
    })

    if(lectivas){
        for(let i = 0; i< lectivas.length ; i++){
            sum += +lectivas[i]
            
            console.log(sum);
            
        }
    }
    return sum 
}