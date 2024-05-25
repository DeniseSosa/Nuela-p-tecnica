
export type CursosEntry = {
    asignatura: string,
    tipo: "obligatoria" | "optativa",
    curso: string,
    grupo: string,
    horas_semana: string,
    espacio_regular: string
}


export type ProfesoresEntry = {
    id:number,
    nombre: string,
    apellido: string,
    telefono: string,
    mail:string,
    cursos: CursosEntry[]
}