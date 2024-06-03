import { getProfesorByIdController } from "../../controllers/profesores/getProfesorByIdController"


export const horasComplementarias =(id:number) => {
    const getProfesorById= getProfesorByIdController(id)

    let sum =0
    const complementarias= getProfesorById?.cursos.map(c => {
        let comp = 0
        if(c.tipo=== "optativa"){
           let comp = c.horas_semana.slice(0,1)
            return comp
        } 
      return comp
    })

    if(complementarias){
        for(let i = 0; i< complementarias.length ; i++){
            sum += +complementarias[i]
            
            console.log(sum);
            
        }
    }
    return sum 
}