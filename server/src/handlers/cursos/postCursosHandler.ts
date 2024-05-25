import { postCursoController } from "../../controllers/cursos/postCursoController";
import { Request, Response } from "express";
export const postCursosHandler = (req: Request, res:Response) => {
    const {id} = req.params
    const {asignatura, tipo, curso, grupo, horas_semana, espacio_regular} = req.body
    try {
       const postCurso = postCursoController(+id, {asignatura, tipo, curso, grupo, horas_semana, espacio_regular})
       res.status(200).json(postCurso)
    } catch (error) {
        const errMsg = error instanceof Error 
        ? error.message 
        : 'there was an error...';
    console.error(errMsg)
    res.status(500).json({ message: 'Error interno del servidor' })
        
    }
}