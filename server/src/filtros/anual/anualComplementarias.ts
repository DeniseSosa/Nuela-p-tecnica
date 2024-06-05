import { horasComplementarias } from "../semanal/horasComplementarias"

export const anualComplementarias =(id:number) =>{
    const complementariasSemanal= horasComplementarias(id)
    const complementariasAnual= complementariasSemanal*52
    return complementariasAnual
}