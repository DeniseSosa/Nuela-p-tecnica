import { horasLectivas } from "../semanal/horasLectivas"

export const anualLectivas =(id:number) =>{
    const lectivasSemanal= horasLectivas(id)
    const lectivasAnual= lectivasSemanal*52
    return lectivasAnual
}