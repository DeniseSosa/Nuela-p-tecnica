import { anualComplementarias } from "./anualComplementarias"
import { anualLectivas } from "./anualLectivas"


export const anualTotales =(id:number) =>{
    const lectAnual= anualLectivas(id)
    const complementariasAnual= anualComplementarias (id)
    const totales = lectAnual + complementariasAnual
    return totales
}