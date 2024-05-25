import {  ProfesoresEntry } from "../../types/types"
import { prof } from "./getProfesoresController"



export const putProfesorByIdController  = (id:number, nombre: string ,apellido: string, telefono: string, mail: string) : ProfesoresEntry =>{
    const getProfe=  prof.find(p=> p.id === id)
    if(!getProfe) throw new Error ("no se encontró id solicitado")
    if(!nombre || !apellido || !telefono || !mail ) throw Error ("Flatan datos")
    if(nombre) getProfe.nombre = nombre
    if(apellido) getProfe.apellido = apellido
    if (telefono) getProfe.telefono = telefono
    if(mail) getProfe.mail= mail
    
 return getProfe
}

//console.log(putProfesorByIdController(1, "juan", "Martínez", "353445445","juan.martinez@gmail.com"))
